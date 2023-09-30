import {Injectable} from "@nestjs/common";
import { Model, ObjectId } from "mongoose";
import { Cards } from "./schemas/cards.schemas";
import { InjectModel } from '@nestjs/mongoose';
import { CreateCardDto } from "./dto/create-card.dto";
import { FileService, FileType } from "src/files/file.service";

@Injectable()
export class CardsServis {
    constructor(
        @InjectModel(Cards.name) private cardsModel: Model<Cards>,
        private fileService: FileService
    ) {}

    async create(dto: CreateCardDto, picture): Promise<Cards> {
        const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
        const track = await this.cardsModel.create({...dto, listens: 0, picture: picturePath})
        return track;
    }

    async getAll(): Promise<Cards[]>{
        const cards = await this.cardsModel.find();
        return cards;
    }
    async getOne(id: ObjectId): Promise<Cards> {
        const card = await this.cardsModel.findById(id);
        return card;
    }
    async update(id: ObjectId, dto: CreateCardDto): Promise<Cards> {
        const updatedCard = await this.cardsModel.findByIdAndUpdate(id, dto, { new: true });
        return updatedCard;
    }
    async delete(id: ObjectId): Promise<any> {
        const card = await this.cardsModel.findByIdAndDelete(id);
        return card._id;
    }
};
