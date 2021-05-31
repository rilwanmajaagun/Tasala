import { CommonRoutesConfig } from './common/common.routes.config';
import express from 'express';
declare const routes: Array<CommonRoutesConfig>;
declare const route: (app: express.Application) => void;
export { routes, route };
