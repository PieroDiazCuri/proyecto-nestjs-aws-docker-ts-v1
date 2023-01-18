class Service {
  static PORT: number = 4000;
  static HOST: string = 'localHost';
  //para usar el this el metodo tiene que ser static
  static getUrl(): string {
    return `http://${this.HOST}:${this.PORT}`;
  }
  //cuando se usa static ya no requiere this.
  getUrlApi(): string {
    return `http://${Service.HOST}:${Service.PORT}`;
  }
}
//Al usar static ya no es necesario instanciar la clase
console.log('PORT: ', Service.PORT);
console.log('HOST: ', Service.HOST);
console.log('URL: ', Service.getUrl());

//Tambien se puede instanciar
const service = new Service();
console.log('URL API: ', service.getUrlApi());
//tambien se puede usar una propiedad de la clase asi no sea del constructor heredado
class CouseIdInvalidException extends Error {
  constructor() {
    super(CouseIdInvalidException.getMessage());
  }
  static getMessage() {
    return 'Id no es un UUID válido';
  }
}
const exception = new CouseIdInvalidException();
console.log('Exception: ', exception);
