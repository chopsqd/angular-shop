import {IProduct} from "../../../admin/common/types/IProduct";

export interface IOrder {
  id: string
  name: string
  phone: string
  adress: string
  orders: Array<IProduct>
  price: string
  payment: 'Card' | 'Cash'
  date: string
}
