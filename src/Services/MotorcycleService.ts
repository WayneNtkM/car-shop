import { isValidObjectId } from 'mongoose';
import BikeODM from '../Models/MotorcycleModel';
import ErrorFactory from '../utils/ErrorFactory';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class MotorcycleService {
  private model;
  constructor() {
    this.model = new BikeODM();
  }

  public async findById(id: string): Promise<Motorcycle> {
    if (!isValidObjectId(id)) throw new ErrorFactory(422, 'Invalid mongo id');

    const data = await this.model.findByID(id);
    if (!data) {
      throw new ErrorFactory(404, 'Motorcycle not found');
    }
    return new Motorcycle(data);
  }

  public async registerMotorcycle(entity: Omit<IMotorcycle, 'id'>): Promise<Motorcycle> {
    const data = await this.model.create(entity);
    return new Motorcycle(data);
  }

  public async findAllMotorcycles(): Promise<Motorcycle[]> {
    const data = await this.model.findAll();
    return data.map((e) => new Motorcycle(e));
  }

  public async updateMotorcycle(id: string, obj: IMotorcycle): Promise<Motorcycle> {
    await this.findById(id);

    const data = await this.model.update(id, obj) as IMotorcycle;

    return new Motorcycle(data);
  }

  public async deleteMotorcycle(id: string) {
    await this.findById(id);

    return this.model.deleteMotorcycle(id);
  }
}