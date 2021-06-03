import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";
import CategoryController from '../../../controller/category';
import CategoryMiddleware from '../../../middleware/category.middleware';
import { CreateCategoryDto } from '../../../dto/Category.dto';



export class CategoryRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "CategoryRoutes");
  }

  configureRoutes() {
    this.app
      .route(`/api/v1/category`)
      .get(
        CategoryController.getCategories
      )
      .post(
        CategoryMiddleware.validateIfCategoryAlreadyExist,
        CategoryController.createCategory
      )

      this.app
      .route('/api/v1/category/:id')
      .all(CategoryMiddleware.validateCategory)
      .get(CategoryController.getCategory)
      .patch(CategoryController.editCategory)
    return this.app;
  }
}
