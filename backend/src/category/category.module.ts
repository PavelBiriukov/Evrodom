import {Module} from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { FileService } from "src/files/file.service";
import { CategoriesController } from "./category.controller";
import { CategoriesServis } from "./category.service";
import { Categories, CategoriesSchema } from "./schemas/category.schemas";

@Module({
    imports: [MongooseModule.forFeature([{ name: Categories.name, schema: CategoriesSchema }])],
    controllers: [CategoriesController],
    providers: [CategoriesServis, FileService]
})
export class CategoriesModule {
    
};