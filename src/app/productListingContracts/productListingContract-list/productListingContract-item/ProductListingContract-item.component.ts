import { Component, OnInit, Input } from '@angular/core';

import { ProductListingContractService } from '../../ProductListingContract.service';


@Component({
  selector: 'app-productListingContract-item',
  templateUrl: './ProductListingContract-item.component.html',
  styleUrls: ['./ProductListingContract-item.component.css']
})
export class ProductListingContractItemComponent implements OnInit {
  @Input() productListingContract
  @Input() index: string;

	private ownerID: string;
	private supplierID: string;
	private splitted_Listing_1: string[];
  private splitted_Listing_2: string[];

  constructor(
		private productListingContractService: ProductListingContractService,
	) {}


  ngOnInit() {

		var splitted_Listing_1 = this.productListingContract.owner.split('#', 2);
		this.ownerID = String(splitted_Listing_1[1]);

		var splitted_Listing_2 = this.productListingContract.supplier.split('#', 2);
		this.supplierID = String(splitted_Listing_2[1]);

  }

  productsExist () {
		return this.productListingContract.products.length > 0
	}
}
