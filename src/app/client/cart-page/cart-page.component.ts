import { Component } from '@angular/core';
import {ProductService} from "../../admin/common/product.service";
import {IProduct} from "../../admin/common/types/IProduct";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IOrder} from "../common/types/IOrder";
import {OrderService} from "../common/order.service";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {

  cartProsucts: Array<IProduct> = []
  totalPrice = 0

  form: FormGroup

  constructor(
    private ProductService: ProductService,
    private OrderService: OrderService
  ) {}

  ngOnInit() {
    this.cartProsucts = this.ProductService.cartProducts
    this.totalPrice = this.cartProsucts.reduce((acc, cur) => acc+Number(cur.price), 0)

    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      adress: new FormControl(null, Validators.required),
      payment: new FormControl('Cash')
    })
  }

  submit() {
    if(this.form.invalid) return

    const order: IOrder = {
      ...this.form.value,
      price: this.totalPrice,
      orders: this.cartProsucts,
      date: new Date()
    }

    this.OrderService.create(order).subscribe(res => {
      this.form.reset()
    })
  }

  delete(product: IProduct) {
    this.totalPrice -= +product.price
    this.cartProsucts.splice(this.cartProsucts.indexOf(product), 1)
  }
}
