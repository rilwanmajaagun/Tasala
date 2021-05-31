import express from 'express';
import {CommonRoutesConfig} from '../common/common.routes.config';
import UserController from '../../../controller/user';

export class UserRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "CategoryRoutes");
  }

  configureRoutes() {
    this.app
      .route(`/api/v1/users`)
      .get(
        UserController.getUsers
      )
      .post(
        // CategoryMiddleware.validateIfCategoryAlreadyExist,
        // CategoryController.createCategory
      )

      this.app
      .route('/api/v1/category/:id')
      // .all(CategoryMiddleware.validateCategory)
      // .get(CategoryController.getCategory)
      // .patch(CategoryController.editCategory)
    return this.app;
  }
}
