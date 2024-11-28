import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoEstoqueController } from './mongo-estoque.controller';
import { MongoEstoqueService } from './mongo-estoque.service';
import { MongoEstoqueSchema } from './schema/mongo-estoque.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'MongoEstoque', schema: MongoEstoqueSchema },
    ]),
  ],
  controllers: [MongoEstoqueController],
  providers: [MongoEstoqueService],
})
export class MongoEstoqueModule {}
