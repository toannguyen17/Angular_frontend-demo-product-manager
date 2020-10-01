import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators}   from '@angular/forms';
import {ProductService}                       from '../product.service';
import {Router}                               from '@angular/router';
import {IProduct}                             from '../iproduct';

@Component({
    selector     : 'app-create',
    templateUrl  : './create.component.html',
    encapsulation: ViewEncapsulation.None
})
export class CreateComponent implements OnInit {

    formGroup: FormGroup;

    constructor(
        private productService: ProductService,
        private formBuilder: FormBuilder,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.formGroup = this.formBuilder.group({
            name       : ['', [Validators.required]],
            price      : ['', [Validators.required]],
            description: ['', [Validators.required]]
        });
    }

    onCreate(): void {
        if (!this.formGroup.invalid) {
            let newProduct = {
                name       : this.formGroup.get('name').value,
                price      : this.formGroup.get('price').value,
                description: this.formGroup.get('description').value,
            } as IProduct;

            console.log(newProduct);

            this.productService.save(newProduct).toPromise().then(r => {
                this.router.navigate(['/']).then(r2 => {
                    console.log(r2);
                });
            });
        }
    }
}
