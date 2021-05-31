import express, {Request, Response, ErrorRequestHandler} from "express";
import cors from "cors";
import * as expressWinston from 'express-winston';
import bodyParser from "body-parser";
import loggerOptions from './logger'
import {route} from '../routes/v1';
import errorMiddleware from '../middleware/error.middleware';

const  expressConfig = (app:express.Application ) => {
app.use(cors());
app.use(bodyParser.json());
app.use(expressWinston.logger(loggerOptions));
route(app)
app.use(errorMiddleware);
};

export default expressConfig;

