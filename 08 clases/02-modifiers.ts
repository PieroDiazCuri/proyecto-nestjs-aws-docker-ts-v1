//atributos y propiedades publicas
class Course {
  public id: number = 0;
  public title: string = '';
  public price: number = 0;
  public active: boolean = true;
}

const course = new Course();
course.id = 1;
course.title = 'TypeScript';
course.price = 30;
course.active = true;
console.log('Course: ', course);
//atributos y propiedades privadas
class Course2 {
  private id: number = 0;
  public title: string = '';
  public price: number = 0;
  public active: boolean = true;
  public getId(): number {
    return this.id;
  }
  public setId(id: number): void {
    this.id = id;
  }
}

const course2 = new Course2();
course2.setId(1);
course2.title = 'TypeScript';
course2.price = 30;
course2.active = true;
console.log('Course2: ', course2);
