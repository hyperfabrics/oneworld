import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { RegulatorService } from '../Regulator.service';

@Component({
	selector: 'app-regulator-list',
	templateUrl: './Regulator-list.component.html',
	styleUrls: ['./Regulator-list.component.css']
})
export class RegulatorListComponent implements OnInit, OnDestroy {
	subscription: Subscription;

	private allParticipants;
	private errorMessage;
	private isEmpty: boolean;

	constructor(
		public serviceRegulator: RegulatorService,
		private router: Router,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.loadAll();
	}

	loadAll(): Promise<any> {
		const tempList = [];
		return this.serviceRegulator
			.getAll()
			.toPromise()
			.then(result => {
				this.errorMessage = null;
				result.forEach(participant => {
					tempList.push(participant);
				});
				this.allParticipants = tempList;
				console.log('Regulators from Import-list Component ===>', tempList);
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
