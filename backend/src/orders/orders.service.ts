import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BadRequestException, UnauthorizedException } from '@nestjs/common';
import { TokenService } from '../token/token.service';
import * as bcrypt from 'bcryptjs';
import * as uuid from 'uuid'
import { MailService } from 'src/mail/mail.service';
import { ApiError } from 'src/exceptions/api-error';
import { verify } from 'jsonwebtoken';
import { Orders } from './schemas/orders.schemas';

@Injectable()
export class OrdersService {
    constructor(
        @InjectModel(Orders.name) private ordersModel: Model<Orders>,
        private mailService: MailService,
    ) {}

    async pushMail(order: Orders): Promise<void> {
        try {
            await this.mailService.orders(order);
        } catch (error) {
            // Обработка ошибок при отправке почты
            console.error('Ошибка при отправке почты:', error);
            throw ApiError.UnauthorizedError();
        }
    }

    async orderCreate(order: Orders): Promise<Orders> {
        const createdOrder = new this.ordersModel(order);
        return createdOrder.save();
    }

    async orderDelete(orderId: string): Promise<any> {
        return this.ordersModel.findByIdAndDelete(orderId);
    }

    async getOrderById(orderId: string): Promise<Orders | null> {
        return this.ordersModel.findById(orderId).exec();
    }

    async getAllOrders(): Promise<Orders[]> {
        return this.ordersModel.find().exec();
    }
    
    
}
