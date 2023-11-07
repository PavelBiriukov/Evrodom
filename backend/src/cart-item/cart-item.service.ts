import { Injectable } from '@nestjs/common';
import { CartItemDto } from './dto/cart-item.dto';

@Injectable()
export class CartItemsService {
    private cartItems: CartItemDto[] = [];

    getCartItems(): CartItemDto[] {
        return this.cartItems;
    }

    addToCart(item: CartItemDto): void {
        const existingItem = this.cartItems.find(i => i.id === item.id);
        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else {
            this.cartItems.push(item);
        }
    }

    // Другие методы, например, удаление из корзины, очистка корзины, рассчет общей стоимости и т.д.
}
