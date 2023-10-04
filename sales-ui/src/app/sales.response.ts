import { BrandModel } from "./brand.model";
import { CategoryModel } from "./category.model";
import { ProductModel } from "./product.model";
import { ReturnStruct } from "./return-struct.response";
import { SaleModel } from "./sale.model";

export class SalesResponse extends ReturnStruct {
    public listCategories: CategoryModel[];
    public listProducts: ProductModel[];
    public listBrands: BrandModel[];
    public listSales: SaleModel[];
}