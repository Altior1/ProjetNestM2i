// person/person.schema.ts

import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Prop } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Document } from 'mongoose';

// Définition des champs
// et des contraintes Schéma
@Schema()
export class Address {
    @Prop({ required: true })
    city: string;

    @Prop({ required: true })
    street: string;

    @Prop()
    zipCode: string;
}

const AddressSchema = SchemaFactory.createForClass(Address);


@Schema()
export class Person {
    @Prop({ required: true })
    firstName: string;

    @Prop({ required: true })
    lastName: string;

    @Prop({ required: true })
    age: number;

    @Prop({ required: true })
    email: string;

    @Prop()
    company: string;

    @Prop()
    jobTitle: string;

    @Prop({ type: AddressSchema, required: false })
    address: Address;

}



// Création du document, HydratedDocument
// fusionne les champs du schéma avec ceux
// du document par défaut de Mongoose
// (_id, createdAt, et updatedAt)
export type PersonDocument = HydratedDocument<Person>;

// Création d'un schéma Mongoose à partir de la définition
export const PersonSchema = SchemaFactory.createForClass(Person);

