import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoEstoque } from './schema/mongo-estoque.schema';
import { CouchDBEstoqueService } from 'src/couchdb-estoque/couchdb-estoque.service';

@Injectable()
export class MongoEstoqueService {
  constructor(
    @InjectModel('MongoEstoque')
    private readonly estoqueModel: Model<MongoEstoque>,
    private readonly couchDBEstoqueService: CouchDBEstoqueService,
  ) {}

  async create(createEstoqueDto: any): Promise<MongoEstoque> {
    const createdEstoque = new this.estoqueModel(createEstoqueDto);
    return createdEstoque.save();
  }

  async findAll(): Promise<MongoEstoque[]> {
    return this.estoqueModel.find().exec();
  }

  async findOne(id: string): Promise<MongoEstoque> {
    return this.estoqueModel.findOne({ id_estoque: id }).exec();
  }

  async update(estoqueId: string, quantidade: number): Promise<MongoEstoque> {
    this.couchDBEstoqueService.updateQuantidade(estoqueId, quantidade);
    return await this.estoqueModel
      .findOneAndUpdate(
        { id_estoque: estoqueId },
        { quantidade },
        { new: true },
      )
      .exec();
  }

  async remove(id: string): Promise<any> {
    return this.estoqueModel.deleteOne({ id_estoque: id }).exec();
  }
}
