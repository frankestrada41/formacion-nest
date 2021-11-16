import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Res, } from '@nestjs/common';
import { CatDto } from "./dto/cat.dto";
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
    findCat(@Param('catId') id: string ): Cat{
        const cat = this.catsService.getCat(parseInt(id))
        if(!cat){
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }
        return cat
    }
    @Post()
    postCat(@Body() newCat:CatDto):string {
        return 'this is POST method for route cats and it will post a new cat'
    }
    @Put(':catId')
    putCat(@Body() catEdit: CatDto, @Param('catId') id):string{
        return 'this is PUT method for route cats and it will edit a cat'
    }
    @Delete(':catId')
    deleteCat(@Param('catId') id):string{
        return `this is DELETE method for route cats and it will delete a cat with id: ${id}`
    }
}
