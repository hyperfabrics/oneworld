import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { RegulatorService } from '../Regulator.service';

@Component({
	selector: 'app-regulator-detail',
	templateUrl: './Regulator-detail.component.html',
	styleUrls: ['./Regulator-detail.component.css']
})


export class RegulatorDetailComponent implements OnInit {
	private regulator;
	private errorMessage;
	private id: string;


	constructor(
		private regulatorService: RegulatorService,
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
		return this.regulatorService
		.getparticipant(id)
			.toPromise()
			.then(result => {
				console.log('Single Regulator from Import-list Component ===>', result);
				this.regulator = result;
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

	onEditRegulator() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

	employeesExist () {
		return this.regulator.Employees.length > 0
	}
}
