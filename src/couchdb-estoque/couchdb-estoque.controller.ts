import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CouchDBEstoqueService } from './couchdb-estoque.service';
import { CreateCouchDBEstoqueDto } from './dto/create-couchdb-estoque.dto';

@Controller('couchdb-estoque')
export class CouchDBEstoqueController {
  constructor(private readonly estoqueService: CouchDBEstoqueService) {}

  @Post()
  create(@Body() createEstoqueDto: CreateCouchDBEstoqueDto) {
    return this.estoqueService.create(createEstoqueDto);
  }

  @Get(':id_estoque')
  findOne(@Param('id_estoque') id_estoque: string) {
    return this.estoqueService.findOne(id_estoque);
  }
}
