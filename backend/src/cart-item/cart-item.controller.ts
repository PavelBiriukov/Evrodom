import { Controller, Get, Post, Body } from '@nestjs/common';
import { CartItemsService } from './cart-item.service';
import { CartItemDto } from './dto/cart-item.dto';

@Controller('cart')
export class CartItemController {
    constructor(private readonly cartService: CartItemsService) {}

    @Get()
    getCartItems(): CartItemDto[] {
        return this.cartService.getCartItems();
    }

    @Post()
    addToCart(@Body() item: CartItemDto): void {
        this.cartService.addToCart(item);
    }
}
