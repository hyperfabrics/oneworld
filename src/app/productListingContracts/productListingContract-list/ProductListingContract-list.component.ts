import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ProductListingContractService } from '../ProductListingContract.service';

@Component({
	selector: 'app-productListingContract-list',
	templateUrl: './ProductListingContract-list.component.html',
	styleUrls: ['./ProductListingContract-list.component.css']
})
export class ProductListingContractListComponent implements OnInit, OnDestroy {
	subscription: Subscription;

  private allAssets;
  private asset;
	private allParticipants;
	private errorMessage;

	constructor(
		public serviceProductListingContract: ProductListingContractService,
		private router: Router,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.loadAll();
	}

  loadAll(): Promise<any> {
    const tempList = [];
    return this.serviceProductListingContract.getAll()
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
			this.allAssets = tempList;
			console.log('ProductListingContract (allAssets) ===>', tempList )
			console.log('ProductListingContracts from Import-list Component ===>', tempList);

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

	ngOnDestroy() {
		// this.subscription.unsubscribe();
	}
}
