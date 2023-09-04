import {Pipe, PipeTransform} from "@angular/core";
import {IProduct} from "./types/IProduct";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(products: Array<IProduct>, productName = '') {
    if(!productName.trim())
      return products

    return products.filter(product => product.title.toLowerCase().includes(productName.toLowerCase()))
  }
}
