interface User {
  name: string;
  lastName: string;
  age: number;
  phone: string;
}
const usuario2: Required<User> = {
  name: 'Piero',
  lastName: 'Diaz',
  age: 28,
  phone: '947458447',
};
