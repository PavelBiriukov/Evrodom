import { Controller, Post, Get, Req, Res, Param, UseGuards, UsePipes, ValidationPipe, Delete } from '@nestjs/common';
import { Response, Request } from 'express';
import { BasketService } from 'src/cart-item/cart-item.service';
import { ApiError } from 'src/exceptions/api-error';
import { OrdersService } from './orders.service';
import { Orders } from './schemas/orders.schemas';

@Controller('/api/orders')
export class OrdersController {
    constructor(
        private readonly ordersService: OrdersService,
    ) { }

    @Post('')
    @UsePipes(new ValidationPipe())
    async orderCreate(@Req() req: Request, @Res() res: Response) {
        try {
            const orderData: Orders = req.body; // Предполагается, что данные заказа приходят в теле запроса
            const createdOrder = await this.ordersService.orderCreate(orderData);
            await this.ordersService.pushMail(createdOrder);
            
            // Отправить ответ с созданным заказом или каким-то другим уведомлением
            return res.status(201).json(createdOrder);
        } catch (e) {
            console.error(e);
            throw ApiError.BadRequest('Ошибка', e);
        }
    }

    @Delete(':orderId')
    async deleteOrder(@Param('orderId') orderId: string, @Res() res: Response) {
        try {
            await this.ordersService.orderDelete(orderId);
            return res.status(204).send();
        } catch (e) {
            console.error(e);
            throw ApiError.BadRequest('Ошибка при удалении заказа', e);
        }
    }

    @Get(':orderId')
    async getOrderById(@Param('orderId') orderId: string, @Res() res: Response) {
        try {
            const order = await this.ordersService.getOrderById(orderId);

            if (!order) {
                return res.status(404).json({ message: 'Заказ не найден' });
            }

            return res.status(200).json(order);
        } catch (e) {
            console.error(e);
            throw ApiError.BadRequest('Ошибка при получении информации о заказе', e);
        }
    }

    @Get('all')
    async getAllOrders(@Res() res: Response) {
        try {
            const orders = await this.ordersService.getAllOrders();

            return res.status(200).json(orders);
        } catch (e) {
            console.error(e);
            throw ApiError.BadRequest('Ошибка при получении всех заказов', e);
        }
    }
}
