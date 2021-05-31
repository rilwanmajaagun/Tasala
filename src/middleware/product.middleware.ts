import {Request, Response, NextFunction } from 'express';
import debug from 'debug';
const log: debug.IDebugger = debug('app:users-controller');

import {ProductService} from '../service/product';
import Helpers from '../utils/Helpers'

class ProductMiddleware {
  async validateIfProductAlreadyExist (req: Request, res: Response, next: NextFunction) {
    try {
      const [product] = await ProductService.getProduct(req.body)
      return product ? res.status(400).send('Product already exists') : next()
    } catch(error) {
      next(error)
    }
  }

  async validateProduct (req: Request, res: Response, next: NextFunction) {
    try {
      const [product] = await ProductService.getProduct(req.params)
      req.product = product
      return product ? next(): res.status(404).send('Product NOT Found')
    } catch(error) {
      next(error)
    }
  }

  async generateSku (req: Request, res: Response, next: NextFunction) {
    try {
      console.log('herererrerer')
     const sku = `pro-sku-${Helpers.generateRandomString()}`;
     console.log(sku)
     req.sku = sku
     next()
    } catch(error){
      next(error)
    }
  }
};

export default new ProductMiddleware();