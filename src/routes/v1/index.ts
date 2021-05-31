import {CommonRoutesConfig} from './common/common.routes.config';
import {CategoryRoutes} from './category/category.routes.config';
import { UserRoutes } from './user/user.routes.config'
import { ProductRoutes} from './product/product.routes.config';

import express from 'express';

const routes: Array<CommonRoutesConfig> = [];
const route = (app: express.Application) => {
  routes.push(new CategoryRoutes(app));
  routes.push( new UserRoutes(app))
  routes.push( new ProductRoutes(app))
};

export {
  routes,
  route
};
