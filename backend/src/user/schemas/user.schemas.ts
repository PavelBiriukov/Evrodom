import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import {HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({ unique: true, required: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ default: false })
    isActivated: boolean;

    @Prop()
    activationLink: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
