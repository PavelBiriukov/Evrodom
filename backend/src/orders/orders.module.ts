import {Module} from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { MailService } from "src/mail/mail.service";
import { OrdersController } from "./orders.controller";
import { OrdersService } from "./orders.service";
import { Orders, OrdersSchema } from "./schemas/orders.schemas";

@Module({
    imports: [ MongooseModule.forFeature([{ name: Orders.name, schema: OrdersSchema }])],
    controllers: [OrdersController],
    providers: [OrdersService, MailService]
})
export class OrdersModule {
    
};