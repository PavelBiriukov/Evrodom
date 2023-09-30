import {Body, Controller, Delete, Get, Param, Post, Put, UploadedFiles, UseInterceptors} from "@nestjs/common";
import {FileFieldsInterceptor} from "@nestjs/platform-express";
import { ObjectId } from "mongoose";
import { CardsServis } from "./cards.service";
import { CreateCardDto } from "./dto/create-card.dto";

@Controller('/cards')
export class CardsController {
    constructor(private cardsServis: CardsServis) {}

    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'picture', maxCount: 1 },
    ]))
    create(@UploadedFiles() files, @Body() dto: CreateCardDto) {
        const {picture} = files
        return this.cardsServis.create(dto, picture[0]);
    }

    @Get()
    getAll() {
        return this.cardsServis.getAll()
    }
    @Get(':id')
    getOne(@Param('id') id: ObjectId) {
        return this.cardsServis.getOne(id)
    }

    @Put(':id') 
        update(@Param('id') id: ObjectId, @Body() dto: CreateCardDto) {
        return this.cardsServis.update(id, dto);
    }   

    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.cardsServis.delete(id)
    }
};