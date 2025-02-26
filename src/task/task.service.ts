import { Injectable } from "@nestjs/common";

@Injectable()
export class TaskService {
    search(titre: string): { message: string } {
        return { message: titre };
    }
}