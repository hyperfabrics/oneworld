import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { PartnerService } from '../Partner.service';

@Component({
	selector: 'app-partner-list',
	templateUrl: './Partner-list.component.html',
	styleUrls: ['./Partner-list.component.css']
})
export class PartnerListComponent implements OnInit, OnDestroy {
	subscription: Subscription;

	private allParticipants;
	private errorMessage;

	constructor(
		public servicePartner: PartnerService,
		private router: Router,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.loadAll();
	}

	loadAll(): Promise<any> {
		const tempList = [];
		return this.servicePartner
			.getAll()
			.toPromise()
			.then(result => {
				this.errorMessage = null;
				result.forEach(participant => {
					tempList.push(participant);
				});
				this.allParticipants = tempList;
				console.log('Partners from Import-list Component ===>', tempList);
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

	isEmptyList(): boolean{
		// console.log('called');
		return this.allParticipants.length===0
	}

	ngOnDestroy() {
		// this.subscription.unsubscribe();
	}
}
