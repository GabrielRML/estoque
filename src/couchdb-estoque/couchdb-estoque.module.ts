import { Module } from '@nestjs/common';
import { CouchDBEstoqueService } from './couchdb-estoque.service';
import { CouchDBEstoqueController } from './couchdb-estoque.controller';

@Module({
  imports: [],
  controllers: [CouchDBEstoqueController],
  providers: [CouchDBEstoqueService],
  exports: [CouchDBEstoqueService],
})
export class CouchDBEstoqueModule {}
