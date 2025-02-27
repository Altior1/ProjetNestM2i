import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Prop } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


@Schema()
export class Book {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    genre: Array<string>;

    @Prop({ required: true })
    author: Array<string>;

    @Prop({ required: true })
    publication: number;

    @Prop({ required: true })
    isbn: string;

    @Prop({ required: true })
    publisher: string;

    @Prop({ required: true })
    publishedYear: Date;
}

export type BookDocument = HydratedDocument<Book>;

export const BookSchema = SchemaFactory.createForClass(Book);