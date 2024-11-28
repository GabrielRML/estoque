import { IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateEstoqueDto {
  @IsString()
  id_estoque: string;

  @IsString()
  id_produto: string;

  @IsNumber()
  quantidade: number;

  @IsString()
  loja: string;

  @IsString()
  categoria: string;

  @IsDateString()
  ultima_atualizacao: string;
}
