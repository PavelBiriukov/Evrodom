import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CardsDocument = HydratedDocument<Cards>;

@Schema()
export class Cards {
  @Prop()
  name: string; 

  @Prop()
  price: string;

  @Prop()
  description: string;

  @Prop()
  maker: string;

  @Prop()
  product_availability: string;

  @Prop()
  picture: any[];

  @Prop()
  unique_parameters: string;

  @Prop()
  category: string;

  @Prop()
  unit_of_measurement: string;
}

export const CardsSchema = SchemaFactory.createForClass(Cards);