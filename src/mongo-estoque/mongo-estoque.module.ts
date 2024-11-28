import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoEstoqueController } from './mongo-estoque.controller';
import { MongoEstoqueService } from './mongo-estoque.service';
import { MongoEstoqueSchema } from './schema/mongo-estoque.schema';
import { CouchDBEstoqueModule } from 'src/couchdb-estoque/couchdb-estoque.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'MongoEstoque', schema: MongoEstoqueSchema },
    ]),
    CouchDBEstoqueModule,
  ],
  controllers: [MongoEstoqueController],
  providers: [MongoEstoqueService],
})
export class MongoEstoqueModule {}
