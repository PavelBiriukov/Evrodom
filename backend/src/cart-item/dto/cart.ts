import { IsString, IsNotEmpty, ValidateNested, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { Cards } from 'src/cards/schemas/cards.schemas';
import { BasketItem } from '../schemas/cart-item.schemas';

export class BasketDto {
  @IsString()
  @IsNotEmpty()
  userId: string;
  
  @ValidateNested({ each: true })
  @Type(() => Cards)
  items: BasketItem[]; // Теперь items является массивом

  @IsNumber()
  @IsNotEmpty()
  totalPrice: number;
}