import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(entity: IMotorcycle) {
    super(entity);
    this.category = entity.category;
    this.engineCapacity = entity.engineCapacity;
  }
}