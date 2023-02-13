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
}