interface ProductRequired {
  name: string;
  price: number;
}
interface ProductOpional {
  category: string;
  stock: number;
}
type ProductProperties = ProductRequired & ProductOpional;

const propierties: ProductProperties = {name: 'Product', price: 100, category: 'Electronics', stock: 10};
