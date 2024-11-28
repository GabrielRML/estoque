import { Schema, Document } from 'mongoose';

export const MongoEstoqueSchema = new Schema(
  {
    id_estoque: { type: String, required: true },
    id_produto: { type: String, required: true },
    quantidade: { type: Number, required: true },
    loja: { type: String, required: true },
    categoria: { type: String, required: true },
    ultima_atualizacao: { type: String, required: true },
  },
  { collection: 'Loja 1' },
);

export interface MongoEstoque extends Document {
  id_estoque: string;
  id_produto: string;
  quantidade: number;
  loja: string;
  categoria: string;
  ultima_atualizacao: string;
}
