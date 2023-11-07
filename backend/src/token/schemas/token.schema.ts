import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type TokenDocument = Token & Document;

@Schema()
export class Token {
  @Prop({ type: String, ref: 'User' })
  @ApiProperty()
  user: string;

  @Prop({ required: true })
  @ApiProperty()
  refreshToken: string;
}

export const TokenSchema = SchemaFactory.createForClass(Token);
