import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { SupplierService } from '../Supplier.service';

@Component({
	selector: 'app-supplier-detail',
	templateUrl: './Supplier-detail.component.html',
	styleUrls: ['./Supplier-detail.component.css']
})


export class SupplierDetailComponent implements OnInit {
	private supplier;
	private errorMessage;
	private id: string;


	constructor(
		private supplierService: SupplierService,
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
		return this.supplierService
		.getparticipant(id)
			.toPromise()
			.then(result => {
				console.log('Single Supplier from Import-list Component ===>', result);
				this.supplier = result;
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

	onEditSupplier() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

	employeesExist () {
		return this.supplier.employees.length > 0
	}
}
