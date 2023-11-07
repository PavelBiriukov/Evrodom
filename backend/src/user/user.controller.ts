import { Controller, Post, Get, Req, Res, Param, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response, Request } from 'express';
import { ApiError } from 'src/exceptions/api-error';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('registration')
    @UsePipes(new ValidationPipe()) // Подобно express-validator, здесь используем ValidationPipe
    async registration(@Req() req: Request, @Res() res: Response) {
        try {
            const userData = await this.userService.registration(req.body.email, req.body.password);
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
            return res.json(userData);
        } catch (e) {
            throw ApiError.BadRequest('Ошибка при валидации', e.array());
        }
    }

    @Post('login')
    async login(@Req() req: Request, @Res() res: Response) {
        try {
            const userData = await this.userService.login(req.body.email, req.body.password);
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
            return res.json(userData);
        } catch (e) {
            throw ApiError.BadRequest('Ошибка при валидации', e.array());
        }
    }

    @Post('logout')
    async logout(@Req() req: Request, @Res() res: Response) {
        try {
            const { refreshToken } = req.cookies;
            const token = await this.userService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json(token);
        } catch (e) {
            throw ApiError.BadRequest('Ошибка при валидации', e.array());
        }
    }

    @Get('activate/:link')
    async activate(@Param('link') link: string, @Res() res: Response) {
        try {
            await this.userService.activate(link);
            return res.redirect(process.env.CLIENT_URL);
        } catch (e) {
            throw ApiError.BadRequest('Ошибка при валидации', e.array());
        }
    }

    @Post('refresh')
    async refresh(@Req() req: Request, @Res() res: Response) {
        try {
            const { refreshToken } = req.cookies;
            const userData = await this.userService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
            return res.json(userData);
        } catch (e) {
            throw ApiError.BadRequest('Ошибка при валидации', e.array());
        }
    }

    @Get('users')
    async getUsers(@Res() res: Response) {
        try {
            const users = await this.userService.getAllUsers();
            return res.json(users);
        } catch (e) {
            throw ApiError.BadRequest('Ошибка при валидации', e.array());
        }
    }
}
