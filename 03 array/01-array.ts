const users: string[] = ['Piero', 'Alonso', 'Diaz', 'Curi'];
const books: {title: string; author: string}[] = [
  {title: 'Harry Potter', author: 'J.K. Rowling'},
  {title: 'The Hobbit', author: 'J.R.RR Tolkien'},
];
books.unshift({title: 'The Lord', author: 'J.K. Rowling'});
books.push({title: 'The Hobit 2', author: 'J.K. Rowling'});

console.log('Books', books);
console.log('Users', users);

const allItems = [...users, ...books];
console.log('All Items: ', allItems);
