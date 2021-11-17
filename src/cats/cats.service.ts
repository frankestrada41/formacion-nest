import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CatDto } from './dto/cat.dto';
import { Cat, CatDocument } from './schemas/cat.schema';

@Injectable()
export class CatsService {
    
    constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>){}
    async getCats(): Promise<Cat[]>{
        return await this.catModel.find().exec();
    }

    async getCat(id: string): Promise<Cat> {
        return await this.catModel.findById(id).exec()
        
    }

    async createCat(cat: CatDto ): Promise<Cat>{
       const newCat =  new this.catModel(cat)   
       return await newCat.save()
    }

    async deleteCat(id: string): Promise<Cat>{
        return  await this.catModel.findByIdAndDelete(id).exec()       
    }

    async updateCat(id:string , cat: CatDto): Promise<Cat>{
        return await this.catModel.findByIdAndUpdate(id, cat).exec()
    }
}

