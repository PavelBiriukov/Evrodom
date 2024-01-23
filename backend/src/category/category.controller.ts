import { Body, Controller, Query, Delete, Get, Param, Post, Put, UploadedFiles, UseInterceptors, UploadedFile, Res } from "@nestjs/common";
import { FileFieldsInterceptor, FileInterceptor } from "@nestjs/platform-express";
import { ObjectId } from "mongoose";
import { CategoriesServis } from "./category.service";
import { CreateCategoriesDto } from "./dto/create-categories.dto";


@Controller('/api/categories')
export class CategoriesController {
    constructor(private categoriesServis: CategoriesServis) { }

    @Post() 
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'picture', maxCount: 5 },
    ]))
    create(@UploadedFiles() files, @Body() dto: CreateCategoriesDto) {
        const { picture } = files
        return this.categoriesServis.create(dto, picture);
    }

    @Get()
    getAll(@Query('count') count: number,
        @Query('offset') offset: number) {
        return this.categoriesServis.getAll(count, offset)
    }

    @Get('/search')
    search(@Query('query') query: string) {
        return this.categoriesServis.search(query)
    }

    @Get(':id')
    getOne(@Param('id') id: ObjectId) {
        return this.categoriesServis.getOne(id)
    }

    @Put(':id')
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'picture', maxCount: 5 },
    ]))
    update(@Param('id') id: ObjectId, @Body() dto: CreateCategoriesDto, @UploadedFiles() files,) {
        const { picture } = files;
        return this.categoriesServis.update(id, dto, picture);
    }

    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.categoriesServis.delete(id)
    }
};