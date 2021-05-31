import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";
import ProductController from '../../../controller/product';
import ProductMiddleware from '../../../middleware/product.middleware';
import CategoryMiddleware from '../../../middleware/category.middleware';


export class ProductRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "CategoryRoutes");
  }

  configureRoutes() {
    this.app
      .route(`/api/v1/products`)
      .get(
        ProductController.getProducts
      )
      .post(
        ProductMiddleware.validateIfProductAlreadyExist,
        CategoryMiddleware.validateCategoryById,
        ProductMiddleware.generateSku,
        ProductController.createProduct
      )

      this.app
      .route('/api/v1/product/:ProductId')
      .all(ProductMiddleware.validateProduct)
      .get(ProductController.getProduct)
      return this.app;
  }
  
}