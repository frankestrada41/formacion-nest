import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'


export type CatDocument = Cat & Document

@Schema()
export class Cat {
    @Prop()
    name: string
    @Prop()
    breed: string
    @Prop()
    isAdopted: boolean
}

export const CatSchema = SchemaFactory.createForClass(Cat)