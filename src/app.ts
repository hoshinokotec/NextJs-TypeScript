import express from 'express';
import {json} from 'body-parser';
import todoRoutes from './routes/todos'
import { NextFunction } from 'connect';

const app = express();

app.use(json());

todoRoutes.use('/todos' , todoRoutes);

app.use((err:Error, req:express.Request, res:express.Response , next:NextFunction)=>{
  res.status(500).json({message:err.message});
})

app.listen(3000);