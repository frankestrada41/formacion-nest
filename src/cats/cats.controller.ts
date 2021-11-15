import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateCatDto } from "./dto/create-cat.dto";
import { CatsService } from "./cats.service";
import { Cat } from "./Interfaces/Cat";

@Controller('cats')
export class CatsController {

    constructor(private catsService: CatsService){}

    @Get()
    findAll():Cat[]{
        return this.catsService.getCats()
    }
    @Get(':catId')
    findCat(@Param('catId') id: string): Cat{
        return this.catsService.getCat(parseInt(id))
    }
    @Post()
    postCat(@Body() newCat:CreateCatDto):string {
        console.log(newCat)
        return 'this is POST method for route cats and it will post a new cat'
    }
    @Put(':catId')
    putCat(@Body() catEdit: CreateCatDto, @Param('catId') id):string{
        console.log(catEdit, id)
        return 'this is PUT method for route cats and it will edit a cat'
    }
    @Delete(':catId')
    deleteCat(@Param('catId') id):string{
        return `this is DELETE method for route cats and it will delete a cat with id: ${id}`
    }
}
