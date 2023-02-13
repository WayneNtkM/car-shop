import {
  model,
  Model,
  models,
  Schema,
} from 'mongoose';

export default class AbstractODM<T> {
  protected model: Model<T>;
  protected modelName: string;
  protected schema: Schema;

  constructor(schema: Schema, modelName: string) {
    this.modelName = modelName;
    this.schema = schema;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T) {
    return this.model.create({ ...obj });
  }
}