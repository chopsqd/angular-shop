import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs";
import {IProduct} from "./types/IProduct";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  create(product: IProduct) {
    return this.http.post(`${environment.DB_URL}/products.json`, product)
      .pipe(map((res: any) => {
        return {
          ...product,
          id: res.name,
          date: new Date(product.date)
        }
      }))
  }

  getAll() {
    return this.http.get(`${environment.DB_URL}/products.json`)
      .pipe(map( (res: any) => {
        return Object.keys(res).map(key => ({
          ...res[key],
          id: key,
          date: new Date(res[key].date)
        }))
      }))
  }

  getOne(id: string) {
    console.log(id)
    return this.http.get(`${environment.DB_URL}/products/${id}.json`)
      .pipe(map( (res: any) => {
        return {
          ...res,
          date: new Date(res.date)
        }
      }))
  }
}
