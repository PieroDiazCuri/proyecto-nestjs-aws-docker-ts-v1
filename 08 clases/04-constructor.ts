class Personal {
  private name: string = '';
  private lastName: string = '';
  constructor(name: string, lastName: string) {
    this.name = name;
    this.lastName = lastName;
  }
}

class PersonalAdministrativo extends Personal {
  private departamento: string = '';
  constructor(name: string, lastName: string, departamento: string) {
    super(name, lastName);
    this.departamento = departamento;
  }
  toUpperCase(txt: string): string {
    return txt.toUpperCase();
  }
}
const personal = new Personal('Piero', 'Diaz');
console.log(personal);

const personalAdministrativo = new PersonalAdministrativo('Piero', 'Diaz', 'Lima');
console.log(personalAdministrativo);
