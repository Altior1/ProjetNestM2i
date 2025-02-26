import { Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { get } from 'http';
import { TaskModule } from './task.module';
import { TaskService } from './task.service';
import { MessageInterface } from '../messageInterface';


@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) { }

    @Get()
    getAllTasks(): MessageInterface {
        return { message: 'Get all tasks' };
    }

    @Get('book')
    getBookTask(): { message: string } {
        return { message: 'Get book task' };
    }

    @Post('book')
    createBookTask(): { message: string } {
        return { message: 'Create book task' };
    }

    @Put('book/:id')
    updateBookTask(@Param('id') id: string): { message: string } {
        return { message: 'Update book task' };
    }

    @Patch('book/:id')
    updatePartialBookTask(@Param('id') id: string): { message: string } {
        return { message: 'Update partial book task' };
    }

    @Delete('book/:id')
    deleteBookTask(@Param('id') id: string): { message: string } {
        return { message: 'Delete book task' + id };
    }

    @Get('book/search')
    search(@Query('titre') titre: string): { message: string } {
        return this.taskService.search(titre);
    }
    @Get('book/:id')
    getBookTaskById(@Param('id') id: string): { message: string } {
        return { message: 'Get book task by ${id}' };
    }
}
