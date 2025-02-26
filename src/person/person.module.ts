import { Module } from '@nestjs/common';
import { PersonController } from './person/person.controller';

@Module({
  controllers: [PersonController]
})
export class PersonModule {}
