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
    getOne(@Param('id') id: string): MessageInterface {
        const book = this.BookRepository.findOne(id);
        return { message: 'Book found', data: id };
    }

    @Post('')
    create(@Body() book: any): MessageInterface {
        return { message: 'Book created', data: book };
    }

    @Patch('/updatebook/:id')
    updateBook(@Param('id') id: string, @Body() book: any): MessageInterface {
        return { message: 'Book updated', data: book };
    }
}
