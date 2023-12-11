import {Body, Controller, Query, Delete, Get, Param, Post, Put, UploadedFiles, UseInterceptors, UploadedFile, Res, Logger} from "@nestjs/common";
import {FileFieldsInterceptor, FileInterceptor} from "@nestjs/platform-express";
import { ObjectId } from "mongoose";
import { CardsServis } from "./cards.service";
import { CreateCardDto } from "./dto/create-card.dto";


@Controller('/cards')
export class CardsController {
    constructor(private cardsServis: CardsServis) {}

    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'picture', maxCount: 7 },
    ]))
    create(@UploadedFiles() files, @Body() dto: CreateCardDto) {
        const {picture} = files
        console.log(picture);
        return this.cardsServis.create(dto, picture);
    }

    @Get()
    getAll(@Query('count') count: number,
           @Query('offset') offset: number) {
        return this.cardsServis.getAll(count, offset)
    }

    @Get('/search')
    search(@Query('query') query: string) {
        return this.cardsServis.search(query)
    }

    @Get(':id')
    getOne(@Param('id') id: ObjectId) {
        return this.cardsServis.getOne(id)
    }

    @Put(':id') 
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'picture', maxCount: 10 },
    ]))
    update(@UploadedFiles() files, @Param('id') id: ObjectId, @Body() dto: CreateCardDto) {
        const {picture} = files
        console.log(picture);
        
        return this.cardsServis.update(id, dto, picture);
    }   

    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.cardsServis.delete(id)
    }
};