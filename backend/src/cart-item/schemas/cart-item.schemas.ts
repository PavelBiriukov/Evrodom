import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BasketItem = {
  _id: string;
  name: string;
  picture: any[];
  price: number;
  category: string;
  maker: string
  quantity: number;
};

export type BasketDocument = Document & {
  userId: string;
  items: BasketItem[];
  totalPrice: number;
};

@Schema()
export class Basket {
  @Prop({ unique: true })
  userId: string;

  @Prop({ type: [{ type: Object }] })
  items: BasketItem[];

  @Prop({ default: 0 }) // Устанавливаем значение по умолчанию как 0
  totalPrice: number;
}

export const BasketSchema = SchemaFactory.createForClass(Basket);