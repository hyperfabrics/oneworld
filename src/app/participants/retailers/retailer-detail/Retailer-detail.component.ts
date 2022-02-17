import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { RetailerService } from '../Retailer.service';

@Component({
	selector: 'app-retailer-detail',
	templateUrl: './Retailer-detail.component.html',
	styleUrls: ['./Retailer-detail.component.css']
})


export class RetailerDetailComponent implements OnInit {
	private retailer;
	private errorMessage;
	private id: string;


	constructor(
		private retailerService: RetailerService,
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
		return this.retailerService
		.getparticipant(id)
			.toPromise()
			.then(result => {
				console.log('Single Retailer from Import-list Component ===>', result);
				this.retailer = result;
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

	onEditRetailer() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

	employeesExist () {
		return this.retailer.employees.length > 0
	}
}
