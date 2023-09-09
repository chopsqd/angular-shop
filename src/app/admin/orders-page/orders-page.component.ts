import { Component } from '@angular/core';
import {IProduct} from "../common/types/IProduct";
import {Subscription} from "rxjs";
import {OrderService} from "../../client/common/order.service";
import {IOrder} from "../../client/common/types/IOrder";

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent {

  orders: Array<IOrder> = []
  pSub: Subscription

  constructor(private OrderService: OrderService) {}

  ngOnInit() {
    this.pSub = this.OrderService.getAll().subscribe(orders => this.orders = orders)
  }

  ngOnDestroy() {
    if(this.pSub)
      this.pSub.unsubscribe()
  }

  remove(id: string) {
    this.pSub = this.OrderService.removeOrder(id).subscribe(() =>
      this.orders = this.orders.filter(orders => orders.id !== id)
    )
  }
}
