import { Controller, Post, Get, Req, Res, Param, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response, Request } from 'express';
import { BasketService } from 'src/cart-item/cart-item.service';
import { ApiError } from 'src/exceptions/api-error';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly basketService: BasketService
    ) { }

    @Post('registration')
    @UsePipes(new ValidationPipe()) // Подобно express-validator, здесь используем ValidationPipe
    async registration(@Req() req: Request, @Res() res: Response) {
        try {
            console.log(req.body);
            const userData = await this.userService.registration(req.body.email, req.body.password);
            console.log(userData);

            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
            return res.json(userData);
        } catch (e) {
            console.log(e);
            throw ApiError.BadRequest('Ошибка при валидации', e);
        }
    }

    @Post('login')
    async login(@Req() req: Request, @Res() res: Response) {
        try {
            const userData = await this.userService.login(req.body.email, req.body.password);
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
            return res.json(userData);
        } catch (e) {
            throw ApiError.BadRequest('Ошибка при валидации', e);
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
            throw ApiError.BadRequest('Ошибка при валидации', e);
        }
    }

    @Get('activate/:link')
    async activate(@Param('link') link: string, @Res() res: Response) {
        try {
            await this.userService.activate(link);
            return res.redirect(process.env.CLIENT_URL);
        } catch (e) {
            throw ApiError.BadRequest('Ошибка при валидации', e);
        }
    }

    @Get('refresh')
    async refresh(@Req() req: Request, @Res() res: Response) {
        try {
            const { refreshToken } = req.cookies;
            const userData = await this.userService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            return res.json(userData);
        } catch (e) {
            throw ApiError.BadRequest('Ошибка при валидации', e);
        }
    }

    @Get('users')
    async getUsers(@Res() res: Response) {
        try {
            const users = await this.userService.getAllUsers();
            return res.json(users);
        } catch (e) {
            throw ApiError.BadRequest('Ошибка при валидации', e);
        }
    }

    @Post('basket/add')
    @UsePipes(new ValidationPipe())
    async addToBasket(@Req() req: Request, @Res() res: Response) {
        try {
            const basketDto = req.body;
            const result = await this.basketService.addToBasket(basketDto);
            return res.json(result);
        } catch (e) {
            console.log(e);
            throw ApiError.BadRequest('Ошибка при добавлении в корзину', e);
        }
    }

    @Post('basket/remove')
    @UsePipes(new ValidationPipe())
    async removeFromBasket(@Req() req: Request, @Res() res: Response) {
        try {
            const { items, itemId } = req.body;
            const result = await this.basketService.removeFromBasket(items, itemId);
            return res.json(result);
        } catch (e) {
            console.log(e);
            throw ApiError.BadRequest('Ошибка при удалении из корзины', e);
        }
    }

    @Get('basket/clear/:userId')
    async clearBasket(@Param('userId') userId: string, @Res() res: Response) {
        try {
            await this.basketService.clearBasket(userId);
            return res.json({ message: 'Корзина очищена успешно' });
        } catch (e) {
            console.log(e);
            throw ApiError.BadRequest('Ошибка при очистке корзины', e);
        }
    }

    @Get('basket/user/:userId')
    async getUserBasket(@Param('userId') userId: string, @Res() res: Response) {
        try {
            const userBasket = await this.basketService.getUserBasket(userId);
            return res.json(userBasket);
        } catch (e) {
            console.log(e);
            throw ApiError.BadRequest('Ошибка при получении корзины пользователя', e);
        }
    }
    
    @Post('basket/update')
    @UsePipes(new ValidationPipe())
    async updateBasket(@Req() req: Request, @Res() res: Response) {
        try {
            const basketDto = req.body;
            const result = await this.basketService.updateBasket(basketDto);
            return res.json(result);
        } catch (e) {
            console.log(e);
            throw ApiError.BadRequest('Ошибка при обновлении корзины', e);
        }
    }
}
