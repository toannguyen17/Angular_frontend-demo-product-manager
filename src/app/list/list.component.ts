import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ProductService} from '../product.service';
import {IProduct} from '../iproduct';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {
	products: Array<IProduct> = new Array<IProduct>();

	constructor(private productService: ProductService) {
	}

	ngOnInit() {
		this.productService.getAll().toPromise().then(value => {
			this.products = value.data;
		});
	}
}
