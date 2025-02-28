import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, BookDocument } from './book.schema';
import { BookDTO, UpdateBookDTO } from './book.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class BookRepository {
    constructor(@InjectModel("Book") private readonly BookModel: Model<BookDocument>) { }

    async create(bookDTO: BookDTO): Promise<Book> {
        const book = new this.BookModel(bookDTO);
        return book.save();
    }

    async findAll(): Promise<Book[]> {
        return this.BookModel.find();
    }

    async findOne(id: string): Promise<Book | null> {
        return this.BookModel.findById(id);
    }

    async update(id: string, updateBookDTO: UpdateBookDTO): Promise<Book | null> {
        return this.BookModel.findByIdAndUpdate
            (id, updateBookDTO, { new: true });
    }
    async delete(id: string): Promise<Book | null> {
        return this.BookModel.findByIdAndDelete(id);
    }
}
