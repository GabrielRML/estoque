export interface ICouchDBEstoque {
  id_estoque: string;
  id_produto: string;
  quantidade: number;
  loja: string;
  categoria: string;
  ultima_atualizacao: string;
  _id?: string;
  _rev?: string;
}
