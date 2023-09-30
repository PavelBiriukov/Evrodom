import {Module} from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { FileService } from "src/files/file.service";
import { CardsController } from "./cards.controller";
import { CardsServis } from "./cards.service";
import { Cards, CardsSchema } from "./schemas/cards.schemas";

@Module({
    imports: [MongooseModule.forFeature([{ name: Cards.name, schema: CardsSchema }])],
    controllers: [CardsController],
    providers: [CardsServis, FileService]
})
export class CardsModule {
    
};