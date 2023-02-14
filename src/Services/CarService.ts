import { isValidObjectId } from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarModel';
import ErrorFactory from '../utils/ErrorFactory';

export default class CarService {
  private model;
  constructor() {
    this.model = new CarODM();
  }

  public async findById(id: string): Promise<Car> {
    if (!isValidObjectId(id)) throw new ErrorFactory(422, 'Invalid mongo id');

    const data = await this.model.findByID(id);
    if (!data) {
      throw new ErrorFactory(404, 'Car not found');
    }
    return new Car(data);
  }

  public async registerCar(entity: Omit<ICar, 'id'>): Promise<Car> {
    const data = await this.model.create(entity);
    return new Car(data);
  }

  public async findAllCars(): Promise<Car[]> {
    const data = await this.model.findAll();
    return data.map((e) => new Car(e));
  }

  public async updateCar(id: string, obj: ICar): Promise<Car> {
    await this.findById(id);

    const data = await this.model.update(id, obj) as ICar;

    return new Car(data);
  }

  public async deleteCar(id: string) {
    await this.findById(id);

    return this.model.deleteCar(id);
  }
}