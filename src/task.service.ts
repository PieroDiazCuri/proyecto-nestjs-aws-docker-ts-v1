export class TaskService {
  constructor(private prefix: string) {
    this.prefix = prefix;
  }
  getTask(): any[] {
    return [
      { id: 1, title: `${this.prefix} task 1` },
      { id: 2, title: `${this.prefix} task 2` },
      { id: 3, title: `${this.prefix} task 3` },
    ];
  }
}
