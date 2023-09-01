import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../common/product.service";
import {IProduct} from "../common/types/IProduct";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent {

  form: FormGroup

  constructor(private ProductService: ProductService, private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      type: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      photo: new FormControl(null, Validators.required),
      info: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required)
    })
  }

  submit() {
    if(this.form.invalid) return

    const product: IProduct = {...this.form.value, date: new Date()}

    this.ProductService.create(product).subscribe(res => {
      this.form.reset()
      this.router.navigate(['/'])
    })
  }
}
