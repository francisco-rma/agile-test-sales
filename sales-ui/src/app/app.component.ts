import { Component, OnInit } from '@angular/core';
import { CategoryModel } from './category.model';
import { BrandModel } from './brand.model';
import { ProductModel } from './product.model';
import { SaleModel } from './sale.model';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { SalesService } from './sales.service';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { BarGraphStruct } from './bar-graph.struct';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'agile-test-sales';
  username = 'Francisco Andrade';
  monthDictionary = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
  };
  constructor(private formBuilder: UntypedFormBuilder,
    private salesService: SalesService) { }

  public model: UntypedFormGroup;
  public listCategory: CategoryModel[] = [];
  public listCategoryDisplay: CategoryModel[] = [];

  public listProduct: ProductModel[] = [];
  public listProductDisplay: ProductModel[] = [];

  public listBrand: BrandModel[] = [];
  public listBrandDisplay: BrandModel[] = [];

  public listSale: SaleModel[] = [];

  public loading: boolean = true;

  //Gráficos
  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#f00', '#0f0', '#0ff', '#00f'],
  };

  // public view: any[] = [800, 400];
  public view: any[] = [];

  public barResults: any[] = [];
  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend: boolean = true;
  public legendTitle = "";
  public legendPosition: string = 'right';
  public showXAxisLabel = false;
  public xAxisLabel = 'Month';
  public showYAxisLabel = true;
  public yAxisLabel = 'Number of sales';
  public yScaleMax = 0;
  public yScaleMin = 0;

  ngOnInit() {
    this.model = this.formBuilder.group({
      idCategory: [null],
      idProduct: [null],
      idBrand: [null],
    });
    this.getSales();
  }

  getSales() {
    this.loading = true;
    this.salesService.getSales().subscribe({
      next: (response) => {
        console.log(response);
        this.listCategory = response.listCategories;
        this.listCategoryDisplay = response.listCategories;

        this.listProduct = response.listProducts;
        this.listProductDisplay = response.listProducts;

        this.listBrand = response.listBrands;
        this.listBrandDisplay = response.listBrands;

        this.listSale = response.listSales;

        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
      }
    });
  }

  selectCategory(event: any) {
    console.log(event);
    console.log('Produtos antes: ', this.listProductDisplay);

    this.model.get('idProduct').setValue(null);
    let idCategory = event.value;
    this.listProductDisplay = this.listProduct.filter(x => x.idCategory === idCategory);
    console.log('Produtos depois: ', this.listProductDisplay);
    if (this.listProductDisplay && this.listProductDisplay.length) {
      this.model.get('idProduct').setValue(this.listProductDisplay[0].idProduct);
      this.model.get('idProduct').markAsTouched();
      this.model.get('idProduct').updateValueAndValidity({ onlySelf: false, emitEvent: true });
      this.selectProduct({ value: this.listProductDisplay[0].idProduct });
    }
  }

  selectProduct(event: any) {
    console.log(event);
    console.log('Marcas antes: ', this.listBrandDisplay);
    this.model.get('idBrand').setValue(null);
    let idProduct = event.value;
    this.listBrandDisplay = this.listBrand.filter(x => x.idProduct === idProduct);
    console.log('Marcas depois: ', this.listBrandDisplay);
    if (this.listBrandDisplay && this.listBrandDisplay.length) {
      this.model.get('idBrand').setValue(this.listBrandDisplay[0].idBrand);
      this.selectBrand({ value: this.listBrandDisplay[0].idBrand })
    }
  }

  selectBrand(event: any) {
    console.log(event);
    this.barResults = this.listSale.filter(x => x.idBrand === event.value).map(x => new BarGraphStruct(this.getMonthName(x.month), x.amount));
  }

  getMonthName(month: number): string {
    if (month < 1 || month > 12) {
      return "";
    }
    return this.monthDictionary[month];
  }

  getCategoryName() {
    let category = this.listCategory.find(x => x.idCategory === this.model.get('idCategory').value);
    return category.categoryName;
  }
  getProductName() {
    let product = this.listProduct.find(x => x.idProduct === this.model.get('idProduct').value);
    return product.productName;
  }
  getBrandName() {
    let brand = this.listBrand.find(x => x.idBrand === this.model.get('idBrand').value);
    return brand.brandName;
  }
}
