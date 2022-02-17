import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';


@Component({
	selector: 'app-retailer-edit',
	templateUrl: './Retailer-edit.component.html',
	styleUrls: ['./Retailer-edit.component.css']
})
export class RetailerEditComponent implements OnInit {
	id: string;
	editMode = false;
	retailerForm: FormGroup;

	constructor(
		private route: ActivatedRoute,
		// private retailerService: RecipeService,
		private router: Router
	) {}

	ngOnInit() {
    }
  }
