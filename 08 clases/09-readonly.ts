//readonly se utiliza para que la propiedad solo pueda ser seteada(modificada) dentro del constructor
class Student {
  private readonly id: number = 0;
  private readonly email: string = '';
  private password: string = '';
  private name: string = '';
  private lastName: string = '';
  constructor(name: string, lastName: string, email: string, password: string) {
    this.id = Math.floor(Math.random() * 100);
    this.email = email;
    this.name = name;
    this.lastName = lastName;
  }
  setNewName(name: string): void {
    this.name = name;
  }
  setNewLastName(lastName: string): void {
    this.lastName = lastName;
  }
}

const student = new Student('Piero', 'Diaz', 'pierodiazcuri@gmail.com', '1234');
console.log(student);
