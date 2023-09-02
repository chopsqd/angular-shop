import {Component, Input} from '@angular/core';
import {IProduct} from "../../admin/common/types/IProduct";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: IProduct

  constructor() {  }
}
