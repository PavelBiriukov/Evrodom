// Предположим, что у вас есть доступ к Model<Token> из Mongoose
import { Request, Response, NextFunction } from 'express';
import mongoose, { Model } from 'mongoose';
import { ApiError } from 'src/exceptions/api-error';
import { Token, TokenSchema } from 'src/token/schemas/token.schema';
import { TokenService } from 'src/token/token.service';

// Создание model Token, предположим
const tokenModel: Model<Token> = mongoose.model('Token', TokenSchema); // Это создание Model<Token> из схемы TokenSchema

const tokenService = new TokenService(tokenModel); // Создание экземпляра TokenService, передавая tokenModel

export default function authMiddleware(req: any, res: Response, next: NextFunction): void {
    try {
        const authorizationHeader = req.headers.authorization;

        if (!authorizationHeader) {
            return next(ApiError.UnauthorizedError());
        }

        const accessToken = authorizationHeader.split(' ')[1];

        if (!accessToken) {
            return next(ApiError.UnauthorizedError());
        }

        const userData = tokenService.validateAccessToken(accessToken);

        if (!userData) {
            return next(ApiError.UnauthorizedError());
        }

        // Присваиваем данные пользователя к req для последующего использования
        req.user = userData;
        next();
    } catch (e) {
        return next(ApiError.UnauthorizedError());
    }
}
