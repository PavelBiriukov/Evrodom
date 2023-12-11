import { CreateCardDto } from "src/cards/dto/create-card.dto";
import { BasketItem } from "src/cart-item/schemas/cart-item.schemas";

export class OrdersDto {
    region: string;
    city: string;
    address: string;
    lname: string;
    name: string;
    mname: string;
    phone: string;
    email: string;
    comment: string;
    totalAmount: number;
    deliveryMethod: string;
    paymentMethod: string;
    data: string;
    products: BasketItem[]
}