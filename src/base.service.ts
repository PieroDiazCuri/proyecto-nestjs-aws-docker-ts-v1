export abstract class BaseApplication {
  abstract getTotal(): number;
}
export class Price extends BaseApplication {
  getTotal(): number {
    return 100;
  }
}
