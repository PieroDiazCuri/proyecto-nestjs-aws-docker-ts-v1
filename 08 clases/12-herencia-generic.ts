//1
interface OperationsCommons<TypeID> {
  update(id: TypeID, name: string): void;
}
//2
class OperationCourse implements OperationsCommons<string> {
  update(id: string, name: string): void {
    console.log('Update course:', id, name);
  }
}
class OperationSchedule implements OperationsCommons<number> {
  update(id: number, name: string): void {
    console.log('Update schedule:', id, name);
  }
}
//3-infraestructura que es genérica porque puede ejecutar cualquier clase
class Infraestructure<TypeID, Repository extends OperationsCommons<TypeID>> {
  repository: Repository;
  constructor(repository: Repository) {
    this.repository = repository;
  }
  updateItem(id: TypeID, name: string) {
    this.repository.update(id, name);
  }
}

const operationCourse = new OperationCourse();
//aca se define la clase instanciada y se pasa al constructor de la classe Infraestructture
const infraestructure = new Infraestructure<string, OperationCourse>(operationCourse);
infraestructure.updateItem('9f0fa183-5837-48ae-b500-d3fa8159b58f', 'TypeScripts');

const operationSchedule = new OperationSchedule();
const infraestructure2 = new Infraestructure<number, OperationSchedule>(operationSchedule);
infraestructure2.updateItem(1, 'TypeScripts');
