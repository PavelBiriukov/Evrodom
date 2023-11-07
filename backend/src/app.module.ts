import {Module} from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import {ServeStaticModule} from "@nestjs/serve-static";
import { CardsModule } from "./cards/cards.module";
import { FileModule } from "./files/file.module";
import { join } from "path";
import { CategoriesModule } from "./category/category.module";
import { CartItemsModule } from "./cart-item/cart-item.module";
import { UserModule } from "./user/user.module";


@Module({
    imports: [
        MongooseModule.forRoot(process.env.DB_URL),
        CardsModule,
        FileModule,
        CategoriesModule,
        CartItemsModule,
        UserModule,
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'static'),
        }),
    ]
})
export class AppModule{}