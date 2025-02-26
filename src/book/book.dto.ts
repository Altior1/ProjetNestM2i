import { IsArray, IsDate, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { isString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

class StringDTO {
    @IsString()
    value: string;
}

export class BookDTO {
    @IsString()
    title: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => StringDTO)
    genre: StringDTO[];

    @IsNumber()
    publication: number;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => StringDTO)
    author: string[]

    @IsString()
    isbn: string;

    @IsString()
    publisher: string;

    @IsString()
    language: string;

    @IsNumber()
    paycount: number;

    @IsDate()
    publishedYear: Date;
}

export class BookUpdateDTO extends PartialType(BookDTO) {

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => StringDTO)
    genre: StringDTO[];

    @IsNumber()
    publication: number;

    @IsString()
    language: string;

}