class Product {
  id ?: number;
  name: string;
  price: number;
  url: string;
  description: string;
  quantity: number;
  total: number
  constructor() {
    this.id = 0;
    this.name = '';
    this.price = 0;
    this.url = '';
    this.description = '';
    this.quantity =0
    this.total =0
  }
}

const numberArr = Array.from({ length: 9 }, (_, i) => i + 1);
export {Product, numberArr}

