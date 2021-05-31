import { Request, Response, NextFunction } from "express";
import { CategoryService } from "../../service/category";

class UserController {
  async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const { body } = req;
      const newCategory = await CategoryService.createCategory(body);
      res.status(201).send(newCategory);
    } catch (error) {
      next(error);
    }
  }

}

export default new UserController()