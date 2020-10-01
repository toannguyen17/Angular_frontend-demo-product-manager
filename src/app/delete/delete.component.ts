import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../product.service";

@Component({
	selector: 'app-delete',
	templateUrl: './delete.component.html',
	encapsulation: ViewEncapsulation.None
})
export class DeleteComponent implements OnInit {

	id: number;

	constructor(private router: Router,
	            private activatedRoute: ActivatedRoute,
	            private productService: ProductService
	) {
	}

	ngOnInit(): void {
		this.activatedRoute.params.subscribe(params => {
			this.id = params.id;
		});
	}

	onDelete(){
		this.productService.deleteById(this.id).toPromise().then(value => {
			console.log('Delete', value);
			this.router.navigate(['/']);
		});

	}
}
