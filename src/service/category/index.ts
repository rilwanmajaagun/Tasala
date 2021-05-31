import {getRepository, getConnection} from "typeorm";
import {Category} from '../../entity/Category';
import {CreateCategoryDto, GetCategoryDto, EditCategory } from '../../dto/Category.dto';


export class CategoryService {
  static async createCategory(body:CreateCategoryDto){
      const newCategory = await getRepository(Category).save(body)
      return newCategory
  }

  static async getCategories(): Promise<Category[]> {
    const categories = await getRepository(Category).find()
    return categories
  }

  static async getCategory(data: GetCategoryDto) {
      const category = await getRepository(Category).find({where: [
        { name: data.name },
        { id: data.id }
      ]})
      return category
  }

  static async editCategory(body: EditCategory){
    const { name , id } = body
    const newCategory = await getRepository(Category).update(id, { name });
    return newCategory
  }

  static async getCategoryById(data: GetCategoryDto) {
    const category = await getRepository(Category).find({where: [
      { id: data.category_id }
    ]})
    return category
}
}