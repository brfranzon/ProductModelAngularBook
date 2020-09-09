export class ProductModel{
    constructor(
        public sku: string, // sku is public variable of class sku
        public name: string,
        public imageURL: string,
        public department: string [],
        public price: number
    ){}
}