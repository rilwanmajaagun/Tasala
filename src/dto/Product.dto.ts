import { Category } from "../../src/entity/Category";

export interface createProductDto {
    name: string 
    description: string
    retail_price: number
    discount: number 
    selling_price: number 
    sku: string,
    category: Category
}

export interface GetProductDto {
  productId?: string
  name?: string
}