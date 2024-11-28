import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoEstoque } from './schema/mongo-estoque.schema';

@Injectable()
export class MongoEstoqueService {
  constructor(
    @InjectModel('MongoEstoque')
    private readonly estoqueModel: Model<MongoEstoque>,
  ) {}

  // Método para criar um novo estoque
  async create(createEstoqueDto: any): Promise<MongoEstoque> {
    const createdEstoque = new this.estoqueModel(createEstoqueDto);
    return createdEstoque.save();
  }

  // Método para buscar todos os estoques
  async findAll(): Promise<MongoEstoque[]> {
    return this.estoqueModel.find().exec();
  }

  // Método para buscar um estoque específico
  async findOne(id: string): Promise<MongoEstoque> {
    return this.estoqueModel.findOne({ id_estoque: id }).exec();
  }

  // Método para atualizar um estoque
  async update(id: string, updateEstoqueDto: any): Promise<MongoEstoque> {
    return this.estoqueModel
      .findOneAndUpdate({ id_estoque: id }, updateEstoqueDto, { new: true })
      .exec();
  }

  // Método para deletar um estoque
  async remove(id: string): Promise<any> {
    return this.estoqueModel.deleteOne({ id_estoque: id }).exec();
  }
}
