import {
  IsString,
  IsNotEmpty,
  IsNumber,
  Min,
  IsPositive,
  IsInt,
} from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsString()
  @IsNotEmpty()
  genre: string;

  @IsNumber()
  @IsInt()
  @Min(0) // Ajusta el valor mínimo según necesites
  year: number; // Cambiado a number

  @IsString()
  ISBN: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsNumber()
  @Min(0)
  stock: number;
}
