import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CartItemDocument = HydratedDocument<CartItem>;

@Schema()
export class CartItem {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  id: number;

  @Prop()
  quantity: number;

}

export const CartItemSchema = SchemaFactory.createForClass(CartItem);