import { Schema } from 'mongoose';
import AbstractODM from './AbstractODM';
import ICar from '../Interfaces/ICar';

export default class CarModel extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      buyValue: { type: Number, required: true },
      color: { type: String, required: true },
      doorsQty: { type: Number, required: true },
      model: { type: String, required: true },
      seatsQty: { type: Number, required: true },
      status: { type: Boolean, required: false },
      year: { type: Number, required: true },
    });
    super(schema, 'Car');
  }

  public async create(entity: Omit<ICar, 'id'>) {
    return this.model.create(entity);
  }

  public async findOne() {
    return this.model.findOne();
  }

  public async findAll() {
    return this.model.find();
  }

  public async findByID(id: string) {
    return this.model.findById(id);
  }

  public async update(id: string, obj: ICar) {
    await this.model.updateOne({ _id: id }, { ...obj });
    return this.model.findById(id);
  }

  public async deleteCar(id: string) {
    await this.model.deleteOne({ _id: id });
  }
}