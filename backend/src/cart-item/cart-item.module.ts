import {Module} from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { CartItemController } from "./cart-item.controller";
import { CartItemsService } from "./cart-item.service";
import { CartItem, CartItemSchema } from "./schemas/cart-item.schemas";

@Module({
    imports: [MongooseModule.forFeature([{ name: CartItem.name, schema: CartItemSchema }])],
    controllers: [CartItemController],
    providers: [CartItemsService]
})
export class CartItemsModule {
    
};