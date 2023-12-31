import {Module} from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import {ServeStaticModule} from "@nestjs/serve-static";
import { CardsModule } from "./cards/cards.module";
import { FileModule } from "./files/file.module";
import { join } from "path";
import { CategoriesModule } from "./category/category.module";
import { BasketModule } from "./cart-item/cart-item.module";
import { UserModule } from "./user/user.module";
import { TokenModule } from "./token/token.module";
import { OrdersModule } from "./orders/orders.module";

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://user:user@cluster0.6ds8idn.mongodb.net/?retryWrites=true&w=majority'),
        CardsModule,
        FileModule,
        CategoriesModule,
        BasketModule,
        UserModule,
        TokenModule,
        OrdersModule,
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'static'),
        }),
    ]
})
export class AppModule{}