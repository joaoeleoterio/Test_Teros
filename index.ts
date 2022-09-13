import { NextFunction, Request, Response } from 'express';
import express from 'express';
import { StatusCodes } from 'http-status-codes';
import 'express-async-errors';
import router from './Routes/companies.routes';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3001;

// app.get('/', (req, res) => {
//   res.status(StatusCodes.OK).send('Express + TypeScript')
// });

app.use('/companies', router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});