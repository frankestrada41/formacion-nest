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
    async findCat(@Param('catId') id: string ): Promise<Cat>{     
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {  
            throw new HttpException('Invalid Id', HttpStatus.NOT_ACCEPTABLE)
        }
        const cat = await this.catsService.getCat(id)
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
    putCat(@Body() catEdit: CatDto, @Param('catId') id: string): Promise<Cat>{
        return this.catsService.updateCat(id, catEdit) 
    }

    @Delete(':catId')
    async deleteCat(@Param('catId') id: string):Promise<Cat>{
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {  
            throw new HttpException('Invalid Id', HttpStatus.NOT_ACCEPTABLE)
        }
        const a = await this.catsService.deleteCat(id)
        if(!a){
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND); 
        }
        throw new HttpException('item deleted', HttpStatus.NOT_ACCEPTABLE); 
        
    }
}
