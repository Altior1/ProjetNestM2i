import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';


export class PersonDTO {
    @IsString()
    @IsNotEmpty()
    firstName: string;
    @IsString()
    @IsNotEmpty()
    @MinLength(2, { message: 'Le nom doit contenir au moins 2 caractères' })
    lastName: string;
    @IsNumber()
    @IsNotEmpty()
    age: number;
    @IsEmail()
    @IsNotEmpty()
    email: string;
}

// person.dto.ts

// Ce DTO reprend toutes les propriétés de CreatePersonDto
// mais les rend optionnelles
export class UpdatePersonDto extends PartialType(PersonDTO) { }