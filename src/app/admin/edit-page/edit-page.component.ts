import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../common/product.service";
import {switchMap} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IProduct} from "../common/types/IProduct";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent {

  form: FormGroup

  constructor(
    private route: ActivatedRoute,
    private ProductService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.pipe(
      switchMap(params => this.ProductService.getOne(params['id']))
    ).subscribe(product => {
      this.form = new FormGroup({
        type: new FormControl(product.type, Validators.required),
        title: new FormControl(product.title, Validators.required),
        photo: new FormControl(product.photo, Validators.required),
        info: new FormControl(product.info, Validators.required),
        price: new FormControl(product.price, Validators.required)
      })
    })
  }

  submit() {
    if(this.form.invalid) return

    const product: IProduct = {...this.form.value, date: new Date()}

    this.ProductService.updateProduct(product).subscribe(res => {
      this.form.reset()
      this.router.navigate(['/admin', 'dashboard'])
    })
  }
}
