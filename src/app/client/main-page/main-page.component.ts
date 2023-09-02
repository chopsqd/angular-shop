import {Component} from '@angular/core';
import {ProductService} from "../../admin/common/product.service";
import {IProduct} from "../../admin/common/types/IProduct";
import {Observable} from "rxjs";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  products: Observable<Array<IProduct>>

  constructor(private ProductService: ProductService) {  }

  ngOnInit() {
    this.products = this.ProductService.getAll()
  }
}
