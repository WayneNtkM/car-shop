import { Router } from 'express';
import CarController from '../Controllers/CarController';
import MotorcycleController from '../Controllers/MotorcycleController';

const routes = Router();

routes.put(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).updateCar(),
);

routes.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).registerNewCar(),
);

routes.get(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).findCarById(),
);

routes.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).findAllCars(),
);

routes.put(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).updateCar(),
);

routes.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).registerNewCar(),
);

routes.get(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).findCarById(),
);

routes.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).findAllCars(),
);

export default routes;
