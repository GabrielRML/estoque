import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { MongoEstoqueService } from './mongo-estoque.service';
import { CreateEstoqueDto } from './dto/create-mongo-estoque.dto';

@Controller('mongo-estoque')
export class MongoEstoqueController {
  constructor(private readonly estoqueService: MongoEstoqueService) {}

  @Post()
  create(@Body() createEstoqueDto: CreateEstoqueDto) {
    return this.estoqueService.create(createEstoqueDto);
  }

  @Get()
  findAll() {
    return this.estoqueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estoqueService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateEstoqueDto: any) {
    return this.estoqueService.update(id, updateEstoqueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estoqueService.remove(id);
  }
}
