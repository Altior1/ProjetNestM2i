import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Person, PersonDocument } from './person.schema';
import { PersonDTO } from './person.dto';

@Injectable()
export class PersonRepository {
    constructor(@InjectModel("Person") private readonly PersonModel: Model<PersonDocument>) { }

    async findAll(): Promise<Person[]> {
        return this.PersonModel.find();
    }
    async save(personDto: PersonDTO): Promise<PersonDocument> {
        let person = new this.PersonModel(personDto);
        await person.save();
        return person;
        // ou this.PersonModel.insertOne(personDto);
    }
}