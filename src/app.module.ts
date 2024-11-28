import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoEstoqueModule } from './mongo-estoque/mongo-estoque.module';
import { CouchDBEstoqueModule } from './couchdb-estoque/couchdb-estoque.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/Estoque'),
    MongoEstoqueModule,
    CouchDBEstoqueModule,
  ],
})
export class AppModule {}
