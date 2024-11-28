import { Injectable } from '@nestjs/common';
import * as nano from 'nano';
import { CreateCouchDBEstoqueDto } from './dto/create-couchdb-estoque.dto';

@Injectable()
export class CouchDBEstoqueService {
  private readonly couch = nano('http://localhost:5984');
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
}
