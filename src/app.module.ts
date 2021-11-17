import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';

// This will go in a .env to not be public :)
const DB_URL = 'mongodb://localhost:27017/formacion-nest'

@Module({
  imports: [CatsModule, MongooseModule.forRoot(`${DB_URL}`)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
