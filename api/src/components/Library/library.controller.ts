import { Get, Param } from "@nestjs/common";
import { Post } from "@nestjs/common";
import { Body } from "@nestjs/common";
import { Delete } from "@nestjs/common";
import { Put } from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { UpdateDateColumn } from "typeorm";
import { Library } from "./library.model";
import { LibraryService } from "./library.service";

@Controller('library')
export class LibraryController {
    constructor(private libraryService: LibraryService){}

    @Get()
    async getAll(): Promise<Library[]>{
        return this.libraryService.getAll();
    }

    @Get(':id')
    async getOne(@Param() param): Promise<Library>{
        return this.libraryService.getOne(param.id);
    }

    @Post()
    async create(@Body() book: Library){
        this.libraryService.createBook(book);
    }

    @Put()
    async updateBook(@Body() book: Library): Promise<[number, Library[]]>{
        return this.libraryService.updateBook(book);
    }

    @Delete(':id')
    async deleteBook(@Param() param){
        this.libraryService.deleteBook(param.id);
    }
}