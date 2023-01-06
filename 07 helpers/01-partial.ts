interface User {
  name: string;
  lastName: string;
  age: number;
  phone: string;
}
const usuario: Partial<User> = {age: 28};
const showInfoUser = (user: Partial<User>): void => {
  console.log(`${user.age}`);
};
showInfoUser(usuario);
