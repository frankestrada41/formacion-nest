import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CatDto } from './dto/cat.dto';
import { Cat, CatDocument } from './schemas/cat.schema';

@Injectable()
export class CatsService {
    
    constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>){}
    async getCats(){
        return await this.catModel.find().exec();
    }

    async getCat(id: string) {
        return await this.catModel.findById(id).exec()

    }

    async createCat(cat: CatDto ){
       const newCat =  new this.catModel(cat)   
       return await newCat.save()
    }
}

