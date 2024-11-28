import { Injectable } from '@nestjs/common';
import * as nano from 'nano';
import { CreateCouchDBEstoqueDto } from './dto/create-couchdb-estoque.dto';
import { ICouchDBEstoque } from './interface/couchdb-estoque.interface';

@Injectable()
export class CouchDBEstoqueService {
  private readonly couch = nano('http://admin:password@localhost:5984');
  private readonly db = this.couch.db.use('estoque_loja');

  async create(createEstoqueDto: CreateCouchDBEstoqueDto): Promise<any> {
    const doc = {
      ...createEstoqueDto,
      _id: createEstoqueDto.id_estoque,
    };
    try {
      return await this.db.insert(doc);
    } catch (error) {
      throw new Error('Error saving document in CouchDB');
    }
  }

  async findOne(id_estoque: string): Promise<any> {
    try {
      return await this.db.get(id_estoque);
    } catch (error) {
      throw new Error('Error fetching document from CouchDB');
    }
  }

  async updateQuantidade(id_estoque: string, quantidade: number): Promise<any> {
    try {
      const result = await this.db.find({
        selector: {
          id_estoque: id_estoque,
        },
        limit: 1,
      });

      if (result.docs.length === 0) {
        throw new Error(
          `Documento com id_estoque ${id_estoque} não encontrado`,
        );
      }

      const doc = result.docs[0] as ICouchDBEstoque;

      doc.quantidade = quantidade;

      const response = await this.db.insert(doc);

      return response;
    } catch (error) {
      throw new Error(
        `Erro ao atualizar a quantidade para ${id_estoque}: ${error.message}`,
      );
    }
  }
}
