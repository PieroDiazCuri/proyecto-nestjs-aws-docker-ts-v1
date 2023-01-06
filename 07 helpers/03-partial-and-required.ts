interface ProductRequired {
  name: string;
  price: number;
}
interface ProductOpional {
  category: string;
  stock: number;
}
type Properties = Required<ProductRequired> & Partial<ProductOpional>;
const setProperties = (properties: Properties): void => {
  console.table({name: properties.name, price: properties.price, categody: properties.category});
};
const generatedProperties: Properties = {
  name: 'Product',
  price: 100,
  category: 'Electronics',
};

setProperties(generatedProperties);
