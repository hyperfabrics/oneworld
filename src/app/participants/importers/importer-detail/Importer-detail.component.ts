import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ImporterService } from '../Importer.service';

@Component({
	selector: 'app-importer-detail',
	templateUrl: './Importer-detail.component.html',
	styleUrls: ['./Importer-detail.component.css']
})


export class ImporterDetailComponent implements OnInit {
	private importer;
	private errorMessage;
	private id: string;


	constructor(
		private importerService: ImporterService,
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
		return this.importerService
		.getparticipant(id)
			.toPromise()
			.then(result => {
				console.log('Single Importer from Import-list Component ===>', result);
				this.importer = result;
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

	onEditImporter() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

	employeesExist () {
		return this.importer.employees.length > 0
	}
}
