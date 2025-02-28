import { Controller, Get, Param, Body, Post, Put, Patch, Delete } from '@nestjs/common';
import { HelloService } from 'src/person/hello.service';
import { MessageInterface } from 'src/messageInterface';
import { BookRepository } from './book.repository';
import { BookDTO, UpdateBookDTO } from './book.dto';




@Controller('book')
export class BookController {
    constructor(private readonly helloService: HelloService,
        private readonly BookRepository
            : BookRepository
    ) { }
    @Get('/hellofrombook')
    getHelloFromBook(): string {
        return this.helloService.greet();
    }
    @Get('/allbooks')
    async getAllBooks(): Promise<MessageInterface> {
        const books = await this.BookRepository.findAll();
        return { message: 'All books', data: books };
    }

    @Get('/:id')
    async getOne(@Param('id') id: string): Promise<MessageInterface> {
        const book = await this.BookRepository.findOne(id);
        return { message: 'Book found', data: book };
    }

    @Post('')
    async create(@Body() book: any): Promise<MessageInterface> {
        const bookrespons = await this.BookRepository.create(book);
        return { message: 'Book created', data: bookrespons };
    }

    @Patch('/updatebook/:id')
    async updateBook(@Param('id') id: string, @Body() book: any): Promise<MessageInterface> {
        const bookrespons = await this.BookRepository.update(id, book);
        return { message: 'Book updated', data: bookrespons };
    }

    @Delete('/deletebook/:id')
    async deleteBook(@Param('id') id: string): Promise<MessageInterface> {
        const bookrespons = await this.BookRepository.delete(id);
        return { message: 'Book deleted', data: bookrespons };
    }
}
