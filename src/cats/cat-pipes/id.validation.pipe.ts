import { PipeTransform,Injectable, ArgumentMetadata, HttpException, HttpStatus } from "@nestjs/common";

// I decided to put the pipe in the cats folder due to the size of the project.
// I still named it more generic for more flexibility.
@Injectable()
export class ValidationPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata){
        if(!value.match(/^[0-9a-fA-F]{24}$/)){
            throw new HttpException('Invalid Id', HttpStatus.NOT_ACCEPTABLE)
        }
        return value
    }
}