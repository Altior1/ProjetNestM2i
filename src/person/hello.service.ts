import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
    greet(): string {
        return 'Hello World!';
    }
}
