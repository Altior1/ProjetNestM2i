import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { HelloService } from './hello.service';
import { PersonSchema } from './person.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonRepository } from './person.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Person', schema: PersonSchema }])
  ],
  controllers: [PersonController],
  providers: [HelloService, PersonRepository],
  exports: [HelloService]
})
export class PersonModule { }
