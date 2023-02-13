import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarModel';

export default class CarService {
  private model;
  constructor() {
    this.model = new CarODM();
  }

  public async registerCar(entity: Omit<ICar, 'id'>): Promise<Car> {
    const data = await this.model.create(entity);
    return new Car(data);
  }
}