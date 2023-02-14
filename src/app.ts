import express from 'express';
import routes from './Routes/Routes';
import HTTPException from './middlewares/HTTPException';

const app = express();

app.use(express.json());
app.use(routes);
app.use(HTTPException.handler);

export default app;
