import {getRepository, getConnection} from "typeorm";
import {Product} from '../../entity/Product';
import { Category } from '../../entity/Category'
import {createProductDto, GetProductDto } from '../../dto/Product.dto';


export class ProductService {
  static async getProducts (): Promise<Product[]>{
    const products = await getRepository(Product).find()
    return products
  }

  static async createProduct (data: createProductDto) {
    const product = new Product()
    product.category = data.category
    const newProduct = await getRepository(Product).save(data)
      return newProduct
  };

  static async getProduct(data: GetProductDto) {
    const product = await getRepository(Product).find({where: [
      { name: data.name },
      { id: data.productId },
    ]})
    return product
  }
}
