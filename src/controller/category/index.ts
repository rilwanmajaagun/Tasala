import { Request, Response, NextFunction } from "express";
import { CategoryService } from "../../service/category";

class CategoryController {
  async createCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const { body } = req;
      const newCategory = await CategoryService.createCategory(body);
      res.status(201).send(newCategory);
    } catch (error) {
      next(error);
    }
  }

  async getCategories(req: Request, res: Response, next: NextFunction) {
    try {
      const categories = await CategoryService.getCategories();
      res.status(201).send(categories);
    } catch (error) {
      next(error);
    }
  }

  async getCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const { category } = req;
      res.status(200).send(category);
    } catch (error) {
      next(error);
    }
  }

  async editCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        params: { id },
        body: { name },
      } = req;
      const payload = { name, id };
      await CategoryService.editCategory(payload);
      res.status(200).send('Category Update Successfully');
    } catch (error) {
      next(error);
    }
  }
}
export default new CategoryController();
