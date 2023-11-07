import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import jwt from 'jsonwebtoken';
import { Token } from './schemas/token.schema';

@Injectable()
export class TokenService {
    constructor(@InjectModel(Token.name) private readonly tokenModel: Model<Token>) {}

    generateTokens(payload: any): { accessToken: string; refreshToken: string } {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '15s' });
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '30s' });
        return { accessToken, refreshToken };
    }

    validateAccessToken(token: string): any {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            return userData;
        } catch (e) {
            return null;
        }
    }

    validateRefreshToken(token: string): any {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
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
