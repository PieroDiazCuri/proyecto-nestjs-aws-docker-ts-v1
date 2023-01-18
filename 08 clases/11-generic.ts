interface IResult {
  success: boolean;
  ipdateAt: Date;
}
interface IMethod<TypeID, IResult> {
  save(): IResult;
  delete(id: TypeID): void;
}

class Teacher implements IMethod<number, IResult> {
  save(): IResult {
    throw new Error('Method not implemented.');
  }
  delete(id: number): void {
    throw new Error('Method not implemented.');
  }
}
