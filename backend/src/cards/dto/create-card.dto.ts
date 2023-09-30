export class CreateCardDto {
    readonly name: string;
    readonly prise: string;
    readonly description: string;
    readonly maker: string;
    readonly product_availability: boolean;
    readonly category: string;
}