import { Router } from 'express';
import CarController from '../Controllers/CarController';
import MotorcycleController from '../Controllers/MotorcycleController';

const routes = Router();

const MOTORCYCLE_ROUTE_ID = '/motorcycles/:id';

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

routes.delete(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).deleteCar(),
);

routes.put(
  MOTORCYCLE_ROUTE_ID,
  (req, res, next) => new MotorcycleController(req, res, next).updateCar(),
);

routes.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).registerNewCar(),
);

routes.get(
  MOTORCYCLE_ROUTE_ID,
  (req, res, next) => new MotorcycleController(req, res, next).findCarById(),
);

routes.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).findAllCars(),
);

routes.delete(
  MOTORCYCLE_ROUTE_ID,
  (req, res, next) => new MotorcycleController(req, res, next).deleteMotorcycle(),
);

export default routes;
