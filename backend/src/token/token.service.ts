import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { sign, verify } from 'jsonwebtoken';
import { Model } from 'mongoose';
import { Token } from './schemas/token.schema';

@Injectable()
export class TokenService {
    constructor(@InjectModel(Token.name) private tokenModel: Model<Token>) {}

    generateTokens(payload: any): { accessToken: string; refreshToken: string } {
        const accessToken = sign(payload, 'jwt-secret-key', { expiresIn: '1d' });
        const refreshToken = sign(payload, 'jwt-refresh-secret-key', { expiresIn: '30d' });
        return { accessToken, refreshToken };
    }

    validateAccessToken(token: string): any {
        try {
            const userData = verify(token, 'jwt-secret-key');
            return userData;
        } catch (e) {
            return null;
        }
    }

    validateRefreshToken(token: string): any {
        try {
            const userData = verify(token, 'jwt-refresh-secret-key');
            return userData;
        } catch (e) {
            return null;
        }
    }

    async saveToken(userId: string, refreshToken: string): Promise<Token | null> {
        let tokenData = await this.tokenModel.findOne({ user: userId });
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        const token = await this.tokenModel.create({ user: userId, refreshToken });
        return token;
    }

    async removeToken(refreshToken: string): Promise<any> {
        return this.tokenModel.deleteOne({ refreshToken });
    }

    async findToken(refreshToken: string): Promise<Token | null> {
        return this.tokenModel.findOne({ refreshToken });
    }
}
