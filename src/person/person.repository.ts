import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Person, PersonDocument } from './person.schema';
import { PersonDTO, UpdatePersonDTO } from './person.dto';
import { ObjectId } from 'mongodb';

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

    async update(id: string, personDTO: UpdatePersonDTO | PersonDTO): Promise<PersonDocument | null> {
        {
            await this.PersonModel.findOneAndUpdate
                ({ _id: new ObjectId(id) }, personDTO);
        }
        const updated = await this.PersonModel.findById(id);
        return updated;
    }

    async delete(id: string): Promise<PersonDocument | null> {
        const deleted = await this.PersonModel.findByIdAndDelete(id);
        return deleted;
    }

    async findOne(id: string): Promise<PersonDocument | null> {
        const person = await this.PersonModel.findById(id);
        return person;
    }
}