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
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            const cat = this.catsService.getCat(id)
            // If statement not Workign properly.
            // when passed a valid but not existing Id 
            // it returns promise pending
            if(!cat){
                throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
            }
            return cat
        }
        throw new HttpException('Invalid Id', HttpStatus.NOT_ACCEPTABLE)
    }


    @Post()
    postCat(@Body() newCat:CatDto): Promise<Cat> {
        return this.catsService.createCat(newCat)
    }


    @Put(':catId')
    putCat(@Body() catEdit: CatDto, @Param('catId') id: string): Promise<Cat>{
        return this.catsService.updateCat(id, catEdit) 
    }

    @Delete(':catId')
    deleteCat(@Param('catId') id: string):Promise<Cat>{
        return this.catsService.deleteCat(id)
        
    }
}
