import { Component } from '@angular/core';
import {ProductService} from "../../admin/common/product.service";
import {ActivatedRoute} from "@angular/router";
import {Observable, switchMap} from "rxjs";
import {IProduct} from "../../admin/common/types/IProduct";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {

  product: Observable<IProduct>

  constructor(
    private  ProductService: ProductService,
    private route: ActivatedRoute
  ) {  }

  ngOnInit() {
    this.product = this.route.params.pipe(switchMap(params => {
      return this.ProductService.getOne(params['id'])
    }))
  }

  addProduct(product: IProduct) {
    this.ProductService.addProduct(product)
  }

}
