import { Pipe, PipeTransform } from '@angular/core';
import {IProduct} from "../../admin/common/types/IProduct";

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(products: Array<IProduct>, type: string) {
    if(!type) return products
    return products.filter(product => product.type === type)
  }

}
