class Computer {
  constructor(private name: string, private price: number) {
    this.name = name;
    this.price = price;
  }
}
const computer = new Computer('MacBook Pro', 1000);
console.log(computer);
