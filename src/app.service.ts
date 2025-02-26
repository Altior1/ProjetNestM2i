import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { message: string } {
    return { message: 'Hello World!' };
  }
  getGoodbye(): { message: string } {
    return { message: 'Goodbye World!' };
  }
  getBuongiorno(): { message: string } {
    return { message: 'Buongiorno Mondo!' };
  }
  getBuonasera(): { message: string } {
    return { message: 'Buonasera Mondo!' };
  }
}


