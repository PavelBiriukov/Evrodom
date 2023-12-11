export class CreateCardDto {
    readonly name: string;
    readonly price: number;
    readonly description: string;
    readonly maker: string;
    readonly product_availability: string;
    readonly category: string;
    readonly unique_parameters: string;
    readonly unit_of_measurement: string;
    readonly picture: any[];
}