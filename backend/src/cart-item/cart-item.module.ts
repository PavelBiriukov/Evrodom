import {Module} from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { BasketService } from "./cart-item.service";
import { Basket, BasketSchema } from "./schemas/cart-item.schemas";


@Module({
    imports: [MongooseModule.forFeature([{ name: Basket.name, schema: BasketSchema }])],
    exports: [BasketService],
    providers: [BasketService]
    
})
export class BasketModule {
    
};