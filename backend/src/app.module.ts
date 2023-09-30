import {Module} from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CardsModule } from "./cards/cards.module";
import { FileModule } from "./files/file.module";


@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://user:user@cluster0.6ds8idn.mongodb.net/?retryWrites=true&w=majority'),
        CardsModule,
        FileModule
    ]
})
export class AppModule{}