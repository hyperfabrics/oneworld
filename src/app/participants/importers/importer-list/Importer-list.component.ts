import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ImporterService } from '../Importer.service';

@Component({
	selector: 'app-importer-list',
	templateUrl: './Importer-list.component.html',
	styleUrls: ['./Importer-list.component.css']
})
export class ImporterListComponent implements OnInit, OnDestroy {
	subscription: Subscription;

	private allParticipants;
	private errorMessage;

	constructor(
		public serviceImporter: ImporterService,
		private router: Router,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.loadAll();
	}

	loadAll(): Promise<any> {
		const tempList = [];
		return this.serviceImporter
			.getAll()
			.toPromise()
			.then(result => {
				this.errorMessage = null;
				result.forEach(participant => {
					tempList.push(participant);
				});
				this.allParticipants = tempList;
				console.log('Importers from Import-list Component ===>', tempList);
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
