import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(entity: ICar) {
    super(entity);
    this.doorsQty = entity.doorsQty;
    this.seatsQty = entity.seatsQty;
  }
}