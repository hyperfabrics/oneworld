import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ProductListingContractService } from '../ProductListingContract.service';

@Component({
	selector: 'app-productListingContract-detail',
	templateUrl: './ProductListingContract-detail.component.html',
	styleUrls: ['./ProductListingContract-detail.component.css']
})


export class ProductListingContractDetailComponent implements OnInit {
	private productListingContract;
	private errorMessage;
	private id: string;

	private ownerID: string;
	private supplierID: string;
	private splitted_Listing_1: string[];
	private splitted_Listing_2: string[];

	constructor(
		private productListingContractService: ProductListingContractService,
		private route: ActivatedRoute,
		private router: Router
	) {}


	ngOnInit() {
		this.route.params.subscribe(params => {
			this.id = params['id'];
		this.loadSingle(this.id);
	});

}

	loadSingle(id: any): Promise<any> {
		console.log('id ---', id)
		return this.productListingContractService
		.getAsset(id)
			.toPromise()
			.then(result => {
				console.log('Single ProductListingContract from Import-list Component ===>', result);
				this.productListingContract = result;
				//extracting the IDs from the namespace
				var splitted_Listing_1 = this.productListingContract.owner.split('#', 2);
				this.ownerID = String(splitted_Listing_1[1]);

				var splitted_Listing_2 = this.productListingContract.supplier.split('#', 2);
				this.supplierID = String(splitted_Listing_2[1]);
			})
			.catch(error => {
				if (error === 'Server error') {
					this.errorMessage =
						'Could not connect to REST server. Please check your configuration details';
				} else if (error === '404 - Not Found') {
					this.errorMessage =
						'404 - Could not find API route. Please check your available APIs.';
					this.errorMessage = error;
				}
			});
	}

	onEditProductListingContract() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

	productsExist () {
		return this.productListingContract.products.length > 0
	}
}
