import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { HelloService } from 'src/person/hello.service';

@Module({
  controllers: [BookController],
  providers: [HelloService],
})
export class BookModule { }
