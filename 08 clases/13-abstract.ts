//las clases abstractas  solo sirven para herencias y no para instanciar clases y solo se puede heredar una ves
//también significa que es lo que  tiene que implementarse
abstract class IException {
  abstract codeError: number;
  abstract getMessage(message?: string): string;
  getErrorMessage(message?: string): string {
    return this.getMessage(message);
  }
}
class ScheduleIdInvalidException extends IException {
  codeError = 403;
  getMessage(id: string): string {
    return `ID: ${id} is invalid`;
  }
}
class ScheduleStartInvalidException extends IException {
  codeError = 409;
  getMessage(start: string): string {
    return `Start: ${start} is invalid. Start date must be greater than current date`;
  }
}
const exceptionInvalid = new ScheduleIdInvalidException();
console.log(exceptionInvalid.getMessage('b6a471d9-790a-4630-83e9-1da55051035c'));

const exceptionInvalidStart = new ScheduleStartInvalidException();
console.log(exceptionInvalidStart.getMessage('2022-01-01'));

console.log(exceptionInvalidStart.getErrorMessage('2022-08-20'));
