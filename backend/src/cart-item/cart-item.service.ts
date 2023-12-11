import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BasketDto } from './dto/cart';
import { Basket, BasketDocument, BasketItem } from './schemas/cart-item.schemas';

@Injectable()
export class BasketService {
  private basket: Basket;
  constructor(@InjectModel(Basket.name) private readonly basketModel: Model<BasketDocument>) {
    this.basket = { userId: '', items: [], totalPrice: 0 }
  }

  private calculateTotal(items: BasketItem[]): number {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  }

  async addToBasket(basketDto: BasketDto) {
    const { items, userId } = basketDto;
    const quantity = 1
    // Поиск товара с тем же _id в массиве items
    for (const item of items) {
      // Поиск товара с тем же _id в массиве items
      const existingItem = this.findItemInBasket(item._id);

      if (existingItem) {
        // Если товар уже существует, увеличиваем количество
        existingItem.quantity += quantity;
      } else {
        // Если товара с таким _id еще нет в корзине, добавляем новый
        this.basket.items.push({
          ...item,
          quantity,
        });

        
      }
    }
    this.basket.totalPrice = this.calculateTotal(this.basket.items);
    // Сохраняем обновленную корзину в базу данных или в памяти, в зависимости от вашей реализации
    return this.saveBasketToDatabase(userId, this.basket);
  }

  private findItemInBasket(itemId: string): BasketItem | undefined {
    return this.basket.items.find((item) => item._id === itemId);
  }

  async saveBasketToDatabase(userId: string, updatedBasket: Basket): Promise<any> {
    try {
      // Поиск корзины пользователя по userId
      const existingBasket = await this.basketModel.findOne({ userId });
      if (existingBasket) {
        // Если корзина пользователя существует, обновляем ее
        existingBasket.items = updatedBasket.items;
        existingBasket.totalPrice = updatedBasket.totalPrice;
        await existingBasket.save();
        return existingBasket
      } else {
        // Если корзины пользователя нет, создаем новую
        const newBasket = new this.basketModel({ userId, items: updatedBasket.items, totalPrice: 0 });
        await newBasket.save();
        return newBasket
      }
    } catch (error) {
      console.error('Error saving basket to database:', error);
      // Обработка ошибок сохранения в базу данных
      throw new Error('Failed to save basket to database');
    }
  }

  async removeFromBasket(basketDto: BasketDto, itemId: any) {
    // Поиск товара с тем же _id в массиве items корзины
    const existingItemIndex = basketDto.items.findIndex((basketItem) => basketItem._id === itemId);
    
    if (existingItemIndex !== -1) {
      // Если товар найден, удаляем его из массива items корзины
      basketDto.items.splice(existingItemIndex, 1);

      // Обновляем общую стоимость после удаления товара
      basketDto.totalPrice = this.calculateTotal(basketDto.items);

      // Обновляем this.basket
      this.basket.items = basketDto.items;
      this.basket.totalPrice = basketDto.totalPrice;

      // Сохраняем обновленную корзину в базу данных или в памяти, в зависимости от вашей реализации
      return await this.saveBasketToDatabase(basketDto.userId, basketDto);
    }
  }

  async clearBasket(userId: string): Promise<void> {
    await this.basketModel.deleteOne({ userId });
  }

  async getUserBasket(userId: string): Promise<{ items: BasketItem[]; totalPrice: number, userId: string }> {
    const userBasket = await this.basketModel.findOne({ userId });
    /* return userBasket */
    if (userBasket) {
      const total = this.calculateTotal(userBasket.items);
      userBasket.totalPrice = total;
      await userBasket.save(); // Сохраняем обновленное значение totalPrice в базу данных
      return { items: userBasket.items, totalPrice: total, userId };
    } else {
      return { items: [], totalPrice: 0 , userId};
    }
  }

  async updateBasket(basketDto: BasketDto): Promise<void> {
    try {
      // Поиск корзины пользователя по userId
      const existingBasket = await this.basketModel.findOne({ userId: basketDto.userId });

      if (existingBasket) {
        // Если корзина пользователя существует, обновляем ее
        existingBasket.items = basketDto.items;
        existingBasket.totalPrice = this.calculateTotal(basketDto.items);
        await existingBasket.save();
        return await this.saveBasketToDatabase(basketDto.userId, existingBasket);
      } else {
        // Если корзины пользователя нет, создаем новую
        const newBasket = new this.basketModel({
          userId: basketDto.userId,
          items: basketDto.items,
          totalPrice: this.calculateTotal(basketDto.items),
        });
        await newBasket.save();
        return await this.saveBasketToDatabase(basketDto.userId, newBasket);
      }
    } catch (error) {
      console.error('Error updating basket in database:', error);
      // Обработка ошибок обновления корзины в базе данных
      throw new Error('Failed to update basket in database');
    }
  }
}


