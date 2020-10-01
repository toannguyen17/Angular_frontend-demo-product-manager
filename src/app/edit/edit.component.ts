import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router}               from '@angular/router';
import {ProductService}                       from '../product.service';
import {FormBuilder, FormGroup, Validators}   from '@angular/forms';
import {IProduct}                             from '../iproduct';

@Component({
    selector     : 'app-edit',
    templateUrl  : './edit.component.html',
    encapsulation: ViewEncapsulation.None
})
export class EditComponent implements OnInit {

    private id: number;

    private product: IProduct;

    form: FormGroup;

    constructor(
        private productService: ProductService,
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            name       : ['', [Validators.required]],
            price      : ['', [Validators.required]],
            description: ['', [Validators.required]],
        });

        this.activatedRoute.params.subscribe(params => {
            this.id = params.id;

            this.productService.findById(this.id).toPromise().then(value => {
                console.log(value);
                this.product = value.data;

                this.form.patchValue({
                    name       : this.product.name,
                    price      : this.product.price,
                    description: this.product.description,
                });
            });
        });
    }

    onUpdate() {
        if (!this.form.invalid) {
            this.product.name        = this.form.value.name;
            this.product.price       = this.form.value.price;
            this.product.description = this.form.value.description;
            console.log(this.product);

            this.productService.save(this.product).toPromise().then(value => {
                console.log('Update', value);
            });

            this.router.navigate(['/']);
        }
    }

}
