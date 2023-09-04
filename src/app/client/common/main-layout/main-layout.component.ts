import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../../../admin/common/product.service";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

  type: string

  constructor(
    private router: Router,
    private ProductService: ProductService
  ) {  }

  setType(type: string) {
    this.type = type

    if(this.type !== 'cart') {
      this.router.navigate(['/'], {
        queryParams: {
          type: this.type
        }
      })

      this.ProductService.setType(this.type)
    }
  }
}
