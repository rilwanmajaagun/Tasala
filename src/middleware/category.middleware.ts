import {Request, Response, NextFunction } from 'express';
import debug from 'debug';
const log: debug.IDebugger = debug('app:users-controller');

import {CategoryService} from '../service/category';


class CategoryMiddleware {
  async validateIfCategoryAlreadyExist (req: Request, res: Response, next: NextFunction) {
    try {
      const [category] = await CategoryService.getCategory(req.body)
      return category ? res.status(400).send('category already exists') : next()
    } catch(error) {

    }
  }

  async validateCategory (req: Request, res: Response, next: NextFunction) {
    try {
      const [category] = await CategoryService.getCategory(req.params)
      req.category = category
      return category ? next(): res.status(404).send('Category NOT Found')
    } catch(error) {

    }
  }
  async validateCategoryById (req: Request, res: Response, next: NextFunction) {
    try {
      const [category] = await CategoryService.getCategoryById(req.body)
      req.category = category
      return category ? next(): res.status(404).send('Category NOT Found')
    } catch(error) {
      next(error)
    }
  }
};


export default new CategoryMiddleware();