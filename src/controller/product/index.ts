import {Request, Response, NextFunction} from 'express';
import {ProductService} from '../../service/product';

class ProductController {
  async createProduct (req: Request, res: Response, next: NextFunction) {
    try {
      const { body: {name, description,retail_price, selling_price, discount}, category, sku } = req
      const payload = {
        name, 
        description,
        retail_price,
        selling_price,
        discount,
          sku,
          category
      }
      const product = await ProductService.createProduct(payload)
      res.status(201).send(product)
    } catch(error){
      next(error)
    }
  }

  async getProducts (req: Request, res: Response, next: NextFunction ) {
    try{
      const products = await ProductService.getProducts()
      res.status(200).send(products)
    } catch(error){
      next(error)
    }
  }

  async getProduct (req: Request, res: Response, next: NextFunction) {
    try {
        const { product } = req;
        res.status(200).send(product)
    } catch(error) {
      next(error)
    }
  }
}

export default new ProductController();
