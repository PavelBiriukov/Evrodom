import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Model, ObjectId } from "mongoose";
import { Cards } from "./schemas/cards.schemas";
import { InjectModel } from '@nestjs/mongoose';
import { CreateCardDto } from "./dto/create-card.dto";
import { FileService, FileType } from "src/files/file.service";

@Injectable()
export class CardsServis {
    constructor(
        @InjectModel(Cards.name) private cardsModel: Model<Cards>,
        private fileService: FileService) { }

    async create(dto: CreateCardDto, picture: any[]): Promise<Cards> {
        try {
            const picturePath = await this.fileService.createFile(FileType.IMAGE, picture);
            const card = await this.cardsModel.create({ ...dto, listens: 0, picture: picturePath });
            return card;
        } catch (error) {
            // Обработка ошибки, если возникла проблема при загрузке файлов
            console.error(error);
            throw new HttpException('Failed to create card', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getAll(count, offset = 0): Promise<Cards[]> {
        const cards = await this.cardsModel.find().skip(Number(offset)).limit(Number(count));
        return cards;
    }


    async search(query: string): Promise<Cards[]> {
        const cards = await this.cardsModel.find({
            name: { $regex: new RegExp(query, 'i') }
        })
        return cards;
    }

    async getOne(id: ObjectId): Promise<Cards> {
        const card = await this.cardsModel.findById(id);
        return card;
    }

    async update(id: ObjectId, dto: CreateCardDto, picture: any[]): Promise<Cards> {
        try {
            if(picture === undefined || picture[0] === ''){
                const updatedCard = await this.cardsModel.findByIdAndUpdate(id, { ...dto, listens: 0});
                return updatedCard;
            }else{
                const picturePath = await this.fileService.createFile(FileType.IMAGE, picture);
                const updatedCard = await this.cardsModel.findByIdAndUpdate(id, { ...dto, listens: 0, picture: picturePath });
                return updatedCard;
            }
        } catch (error) {
            console.error(error);
            throw new HttpException('Failed to update card', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async delete(id: ObjectId): Promise<any> {
        const card = await this.cardsModel.findByIdAndDelete(id);
        return card._id;
    }
};
