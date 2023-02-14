import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle {
  protected id: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;

  constructor(entity: IVehicle) {
    this.id = entity.id || '';
    this.model = entity.model;
    this.year = entity.year;
    this.color = entity.color;
    this.status = entity.status || false;
    this.buyValue = entity.buyValue;
  }
}