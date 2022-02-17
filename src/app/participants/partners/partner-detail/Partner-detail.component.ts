import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { PartnerService } from '../Partner.service';

@Component({
	selector: 'app-partner-detail',
	templateUrl: './Partner-detail.component.html',
	styleUrls: ['./Partner-detail.component.css']
})


export class PartnerDetailComponent implements OnInit {
	private partner;
	private errorMessage;
	private id: string;


	constructor(
		private partnerService: PartnerService,
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
		return this.partnerService
		.getparticipant(id)
			.toPromise()
			.then(result => {
				console.log('Single Partner from Import-list Component ===>', result);
				this.partner = result;
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

	onEditPartner() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

	employeesExist () {
		return this.partner.employees.length > 0
	}
}
