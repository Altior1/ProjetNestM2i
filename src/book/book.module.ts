import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { HelloService } from 'src/person/hello.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './book.schema';
import { BookRepository } from './book.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }])],
  controllers: [BookController],
  providers: [HelloService, BookRepository],
})
export class BookModule { }
