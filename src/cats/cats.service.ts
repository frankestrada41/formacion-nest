import { Injectable } from '@nestjs/common';
import { Cat } from "./Interfaces/Cat";

@Injectable()
export class CatsService {
    cats: Cat[] = [
        {
            id:1,
            name:'test 1',
            breed:'test 1',
            isAdopted: false
        },
        {
            id:2,
            name:'test 2',
            breed:'test 2',
            isAdopted: true
        },
        {
            id:3,
            name:'test 3',
            breed:'test 3',
            isAdopted: false
        }
    ]

    getCats(): Cat[]{
        return this.cats;
    }


    // In this case i put an ':any' to have both options. 
    // The return of a cat object or the error message
    getCat(id: number): any {
        let catFound = this.cats.find(cat => cat.id === id)
        if (catFound === undefined){
            return 'no cat with that id'
        }
        return catFound
    }
}
