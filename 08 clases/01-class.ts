class Product {
  name: string = '';
  price: number = 0;
  category: string = '';
  stock: number = 0;
  info() {
    return `${this.name} ${this.price} ${this.category}`;
  }
  showInfo(): string {
    return this.info();
  }
}

const product = new Product();
product.name = 'Product';
product.price = 100;
product.category = 'Electtronics';
product.stock = 10;

console.log('Product: ', product);
console.log('Product info: ', product.info());
console.log('Product ShowInfo: ', product.info());
//
class ListProduct {
  products: string[] = [];
  add(source: () => string): void {
    this.products.push(source());
  }
}
const listProducts = new ListProduct();
listProducts.add(product.showInfo.bind(product));
console.log('ListProducts: ', listProducts);
