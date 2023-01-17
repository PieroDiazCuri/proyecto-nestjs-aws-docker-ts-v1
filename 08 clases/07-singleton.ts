//El patrón singleton solo se puede instanciar una sola ves
//patrón singleton,metodos státicos para instanciar la clase dentro de la misma clase y ejecuta un metodo que no es estático
class DBConnection {
  static instance: DBConnection;
  private HOST: string = 'localHost';
  private PORT: number = 3306;

  private constructor() {}
  static getInstance(): DBConnection {
    if (!this.instance) {
      this.instance = new DBConnection();
    }
    return this.instance;
  }
  getConnection(): string {
    return `http://${this.HOST}:${this.PORT}`;
  }
}
console.log('Connection', DBConnection.getInstance().getConnection());
