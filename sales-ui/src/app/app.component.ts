import { Component, OnInit } from '@angular/core';
import { CategoryModel } from './category.model';
import { BrandModel } from './brand.model';
import { ProductModel } from './product.model';
import { SaleModel } from './sale.model';
import { UntypedFormBuilder } from '@angular/forms';
import { SalesService } from './sales.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'agile-test-sales';
  constructor(private formBuilder: UntypedFormBuilder,
    private salesService: SalesService) { }

  public listCategory: CategoryModel[] = []
  public listProduct: ProductModel[] = []
  public listBrand: BrandModel[] = []
  public listSale: SaleModel[] = []

  ngOnInit() {
    this.getSales();
  }

  getSales() {
    this.salesService.getSales().subscribe({
      next: (response) => {
        console.log(response);
        this.listCategory = response.listCategories;
        this.listProduct = response.listProducts;
        this.listBrand = response.listBrands;
        this.listSale = response.listSales;

      },
      error: (error) => {

      }
    })
  }
}
