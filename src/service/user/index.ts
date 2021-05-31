import {getRepository, getConnection} from "typeorm";
import {User} from '../../entity/User';
import {CreateCategoryDto, GetCategoryDto, EditCategory } from '../../dto/Category.dto';


export class UserService {
  static async getUsers(): Promise<User[]>{
      const  users = await getRepository(User).find()
      return users
  }

}