import { Product } from "../../src/entity/Product";
import { Category } from "../../src/entity/Category";

declare global{
    namespace Express {
        interface Request {
            category: Category
            product: Product
            sku: string
        }
    }
}
