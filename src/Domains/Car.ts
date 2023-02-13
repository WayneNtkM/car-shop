import ICar from '../Interfaces/ICar';

export default class Car {
  protected id: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(entity: ICar) {
    this.id = entity.id || '';
    this.model = entity.model;
    this.year = entity.year;
    this.color = entity.color;
    this.status = entity.status || false;
    this.buyValue = entity.buyValue;
    this.doorsQty = entity.doorsQty;
    this.seatsQty = entity.seatsQty;
  }
}