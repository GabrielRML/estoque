import { IsString, IsNumber, IsDateString, IsNotEmpty } from 'class-validator';

export class CreateCouchDBEstoqueDto {
  @IsString()
  @IsNotEmpty()
  id_estoque: string;

  @IsString()
  @IsNotEmpty()
  id_produto: string;

  @IsNumber()
  quantidade: number;

  @IsString()
  @IsNotEmpty()
  loja: string;

  @IsString()
  @IsNotEmpty()
  categoria: string;

  @IsDateString()
  ultima_atualizacao: string;
}
