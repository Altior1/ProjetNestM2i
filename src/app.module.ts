import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [TaskModule, PersonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
