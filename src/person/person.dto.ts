import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { Address } from './person.schema';

export class PersonDTO {
    @IsString()
    firstName: string;

    @IsString()
    @MinLength(2, { message: 'Le nom doit contenir au moins 2 caractères' })
    lastName: string;

    @IsNumber()
    age: number;

    @IsEmail()
    email: string;

    @IsOptional()
    address: Address;
}

// person.dto.ts

// Ce DTO reprend toutes les propriétés de CreatePersonDto
// mais les rend optionnelles
export class UpdatePersonDTO extends PartialType(PersonDTO) { }