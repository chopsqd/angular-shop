import {Component, Input} from '@angular/core';
import {IProduct} from "../../admin/common/types/IProduct";
import {ProductService} from "../../admin/common/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: IProduct

  constructor(private ProductService: ProductService) {  }

  addProduct(product: IProduct) {
    this.ProductService.addProduct(product)
  }
}
