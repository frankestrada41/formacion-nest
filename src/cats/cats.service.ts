import { Injectable } from '@nestjs/common';
import { Cat } from "./Interfaces/Cat";

@Injectable()
export class CatsService {
    cats: Cat[] = [
        {
            _id:1,
            name:'test 1',
            breed:'test 1',
            isAdopted: false
        },
        {
            _id:2,
            name:'test 2',
            breed:'test 2',
            isAdopted: true
        },
        {
            _id:3,
            name:'test 3',
            breed:'test 3',
            isAdopted: false
        }
    ]

    getCats(): Cat[]{
        return this.cats;
    }

    getCat(id: number): any {
        return this.cats.find(cat => cat._id === id)
    }
}
