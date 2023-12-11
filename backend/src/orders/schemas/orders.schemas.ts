import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { CreateCardDto } from 'src/cards/dto/create-card.dto';
import { BasketItem } from 'src/cart-item/schemas/cart-item.schemas';
import { OrdersDto } from '../dto/orders.dto';

export type OrdersDocument = HydratedDocument<OrdersDto>;

@Schema()
export class Orders {
    @Prop()
    region: string;

    @Prop()
    city: string;

    @Prop()
    address: string;

    @Prop()
    lname: string;

    @Prop()
    name: string;

    @Prop()
    mname: string;

    @Prop()
    phone: string;

    @Prop()
    email: string;

    @Prop()
    comment: string;

    @Prop()
    totalAmount: number;

    @Prop()
    deliveryMethod: string;

    @Prop()
    paymentMethod: string;

    @Prop()
    data: string;

    @Prop()
    products: BasketItem[]
}

export const OrdersSchema = SchemaFactory.createForClass(Orders);