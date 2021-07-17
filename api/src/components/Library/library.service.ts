import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Library } from "./library.model";

@Injectable()
export class LibraryService{
    constructor(@InjectModel(Library) private libraryModel: typeof Library){}

    async getAll(): Promise<Library[]>{
        return this.libraryModel.findAll();
    }

    async getOne(id: number): Promise<Library>{
        return this.libraryModel.findByPk(id);
    }

    async createBook(book: Library){
        this.libraryModel.create(book)
    }

    async updateBook(book: Library): Promise<[number,Library[]]>{
        return this.libraryModel.update(book, {
            where:{
                id: book.id
            }
        })
    }

    async deleteBook(id: number){
        const book = await this.getOne(id);
        book.destroy();
    }
}