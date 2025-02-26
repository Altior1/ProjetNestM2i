import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { MessageInterface } from 'src/messageInterface';
import { PersonRepository } from './person.repository';
import { PersonDTO } from './person.dto';
import { HelloService } from './hello.service';
@Controller('person')
export class PersonController {
    constructor(private helloService: HelloService, private personRepo: PersonRepository) { }
    @Get('')
    getAll(): string {
        return `On vous souhaite tout le bonheur du monde <br>
Et que quelqu'un vous tende la main <br>
Que votre chemin évite les bombes <br>
Qu'il mène vers de calmes jardins <br>
On vous souhaite tout le bonheur du monde <br>
Pour aujourd'hui, comme pour demain <br>
Que votre soleil éclaircisse l'ombre <br>
Qu'il brille d'amour au quotidien <br>
Puisque l'avenir vous appartient<br>
Puisqu'on ne contrôle pas votre destin <br>
Que votre envol est pour demain <br>
Comme tout ce qu'on a à vous offrir <br>
Ne saurait toujours vous suffire <br>
Dans cette liberté à venir <br>
Puisqu'on ne sera pas toujours là <br>
Comme on le fut aux premiers pas <br>
On vous souhaite tout le bonheur du monde <br>
Et que quelqu'un vous tende la main <br>
Que votre chemin évite les bombes <br>
Qu'il mène vers de calmes jardins<br>
On vous souhaite tout le bonheur du monde <br>
Pour aujourd'hui, comme pour demain <br>
Que votre soleil éclaircisse l'ombre<br>
Qu'il brille d'amour au quotidien<br>
Toute une vie s'offre devant vous<br>
Tant de rêves à vivre jusqu'au bout<br>
Sûrement tant de joies au rendez - vous<br>
Libres de faire vos propres choix<br>
De choisir quelle sera votre voie<br>
Et où celle - ci vous emmènera<br>
J'espère juste que vous prendrez le temps<br>
De profiter de chaque instant<br>
On vous souhaite tout le bonheur du monde<br>
Et que quelqu'un vous tende la main<br>
Que votre chemin évite les bombes<br>
Qu'il mène vers de calmes jardins<br>
On vous souhaite tout le bonheur du monde<br>
Pour aujourd'hui, comme pour demain<br>
Que votre soleil éclaircisse l'ombre<br>
Qu'il brille d'amour au quotidien<br>
Je sais pas quel monde on vous laissera<br>
On fait de notre mieux seulement parfois<br>
J'ose espérer que cela suffira<br>
Pas à sauver votre insouciance<br>
Mais à apaiser notre conscience<br>
Pour le reste, je me dois de vous faire confiance<br>
On vous souhaite tout le bonheur du monde<br>
Et que quelqu'un vous tende la main<br>
Que votre chemin évite les bombes<br>
Qu'il mène vers de calmes jardins<br>
On vous souhaite tout le bonheur du monde<br>
Pour aujourd'hui, comme pour demain <br>
Que votre soleil éclaircisse l'ombre <br>
Qu'il brille d'amour au quotidien <br>
On vous souhaite tout le bonheur du monde, oh oui <br>
Tout le bonheur du monde <br>
On vous souhaite <br>
Tout le bonheur du monde, oh oui <br>
Tout le bonheur du monde <br>
On vous souhaite <br>
Tout le bonheur du monde, oh oui <br>
Tout le bonheur du monde <br>
Que votre chemin évite les bombes <br>
Qu'il mène vers de calmes jardins <br>
On vous souhaite tout le bonheur du monde, oh oui <br>
Tout le bonheur du monde <br>
On vous souhaite <br>
Tout le bonheur du monde, oh oui <br>
Tout le bonheur du monde <br>
On vous souhaite tout le bonheur du monde, oh oui <br>
Tout le bonheur du monde <br>
Que votre soleil éclaircisse l'ombre <br>
Qu'il brille d'amour au quotidien`;
    }
    @Get('/greet')
    helloWorld(): string {
        return this.helloService.greet();

    }

    /*@Get('/:id')
    getOne(@Param('id') id: string): string {
        return `On vous souhaite tout le bonheur du monde mais surtout à toi, ${id}`;
    }*/

    @Post('')
    create(@Body() person: PersonDTO): string {
        return `On vous souhaite tout le bonheur du monde mais surtout à toi, ${person.firstName}`;
    }

    @Get('/allpersons')
    async getAllFromRepo(): Promise<MessageInterface> {
        const persons = await this.personRepo.findAll();
        return { message: 'All persons', data: persons };
    }

    @Post('/addperson')
    async addPerson(@Body() personDto: PersonDTO): Promise<MessageInterface> {
        const person = await this.personRepo.save(personDto);
        return { message: 'Person created', data: person };
    }
}
