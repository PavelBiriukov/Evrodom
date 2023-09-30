import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CardsDocument = HydratedDocument<Cards>;

@Schema()
export class Cards {
  @Prop()
  name: string;

  @Prop()
  prise: string;

  @Prop()
  description: string;

  @Prop()
  maker: string;

  @Prop()
  product_availability: boolean;

  @Prop()
  picture: string;

  @Prop()
  parameters: string;

  @Prop()
  category: string;
}

export const CardsSchema = SchemaFactory.createForClass(Cards);