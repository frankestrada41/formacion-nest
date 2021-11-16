import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CatDto } from "./dto/cat.dto";
import { CatsService } from "./cats.service";
import { Cat } from "./Interfaces/Cat";


@Controller('cats')
export class CatsController {

    constructor(private catsService: CatsService){}

    @Get()
    findAll():Promise<Cat[]>{
        return this.catsService.getCats()
    }
    @Get(':catId')
    findCat(@Param('catId') id: string ): Promise<Cat>{
        const cat = this.catsService.getCat(id)
        
        if(!cat){
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }
        return cat
    }


    @Post()
    postCat(@Body() newCat:CatDto): Promise<Cat> {
        return this.catsService.createCat(newCat)
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
