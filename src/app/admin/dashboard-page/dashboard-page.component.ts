import { Component } from '@angular/core';
import {ProductService} from "../common/product.service";
import {IProduct} from "../common/types/IProduct";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent {

  products: Array<IProduct> = []
  pSub: Subscription

  constructor(private ProductService: ProductService) {}

  ngOnInit() {
    this.pSub = this.ProductService.getAll().subscribe(products => this.products = products)
  }

  ngOnDestroy() {
    if(this.pSub)
      this.pSub.unsubscribe()
  }

  remove(id: string) {

  }
}
