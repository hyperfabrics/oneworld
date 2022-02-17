import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
	selector: 'app-supplier-edit',
	templateUrl: './Supplier-edit.component.html',
	styleUrls: ['./Supplier-edit.component.css']
})
export class SupplierEditComponent implements OnInit {

	id: string;
	editMode = false;
	supplierForm: FormGroup;

	constructor(
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.id = params['id'];
			this.editMode = params['id'] != null;
		});
	}

}
