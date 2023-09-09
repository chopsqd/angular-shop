import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IProduct} from "../../admin/common/types/IProduct";
import {environment} from "../../../environments/environment";
import {map} from "rxjs";
import {IOrder} from "./types/IOrder";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  create(order: IOrder) {
    return this.http.post(`${environment.DB_URL}/orders.json`, order)
      .pipe(map((res: any) => {
        return {
          ...order,
          id: res.name,
          date: new Date(order.date)
        }
      }))
  }

  getAll() {
    return this.http.get(`${environment.DB_URL}/orders.json`)
      .pipe(map( (res: any) => {
        return Object.keys(res).map(key => ({
          ...res[key],
          id: key,
          date: new Date(res[key].date)
        }))
      }))
  }

  removeOrder(id: string) {
    return this.http.delete(`${environment.DB_URL}/orders/${id}.json`)
  }
}
