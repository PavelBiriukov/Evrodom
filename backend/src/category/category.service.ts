import {Injectable} from "@nestjs/common";
import { Model, ObjectId } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import { FileService, FileType } from "src/files/file.service";
import { Categories } from "./schemas/category.schemas";
import { CreateCategoriesDto } from "./dto/create-categories.dto";

@Injectable()
export class CategoriesServis {
    constructor(
        @InjectModel(Categories.name) private CategoriesModel: Model<Categories>,
        private fileService: FileService) {}

    async create(dto: CreateCategoriesDto, picture): Promise<Categories> {
        const picturePath = await this.fileService.createFile(FileType.IMAGE, picture);
        const categories = await this.CategoriesModel.create({...dto, listens: 0, picture: picturePath})
        return categories;
    }А

    async getAll(count, offset = 0): Promise<Categories[]> {
        const categories = await this.CategoriesModel.find().skip(Number(offset)).limit(Number(count));
        return categories;
    }

    async search(query: string): Promise<Categories[]> {
        const categories = await this.CategoriesModel.find({
            name: {$regex: new RegExp(query, 'i')}
        })
        return categories;
    }
    
    async getOne(id: ObjectId): Promise<Categories> {
        const categories = await this.CategoriesModel.findById(id);
        return categories;
    }

    async update(id: ObjectId, dto: CreateCategoriesDto, picture): Promise<Categories> {
        const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
        const updatedCategories = await this.CategoriesModel.findByIdAndUpdate(id, {...dto, listens: 0, picture: picturePath});
        return updatedCategories;
    }

    async delete(id: ObjectId): Promise<any> {
        const categories = await this.CategoriesModel.findByIdAndDelete(id);
        return categories._id;
    }
};
