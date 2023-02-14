import { Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

export default class MotorcycleModel extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      buyValue: { type: Number, required: true },
      color: { type: String, required: true },
      category: { type: String, required: true },
      model: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
      status: { type: Boolean, required: false },
      year: { type: Number, required: true },
    });
    super(schema, 'Motorcycle');
  }

  public async create(entity: Omit<IMotorcycle, 'id'>) {
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

  public async update(id: string, obj: IMotorcycle) {
    await this.model.updateOne({ _id: id }, { ...obj });
    return this.model.findById(id);
  }

  public async deleteMotorcycle(id: string) {
    await this.model.deleteOne({ _id: id });
  }
}