import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { HelloService } from 'src/person/hello.service';

@Controller('book')
export class BookController {
    constructor(private readonly helloService: HelloService
    ) { }
    @Get('/hellofrombook')
    getHelloFromBook(): string {
        return this.helloService.greet();
    }
}
