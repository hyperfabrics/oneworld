import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

// import { RecipeService } from '../partner.service';

@Component({
	selector: 'app-partner-edit',
	templateUrl: './Partner-edit.component.html',
	styleUrls: ['./Partner-edit.component.css']
})
export class PartnerEditComponent implements OnInit {
	id: string;
	editMode = false;
	partnerForm: FormGroup;

	constructor(
		private route: ActivatedRoute,
		// private partnerService: RecipeService,
		private router: Router
	) {}

	ngOnInit() {
		// this.route.params.subscribe((params: Params) => {
		// 	this.id = +params['id'];
		// 	this.editMode = params['id'] != null;
		// 	this.initForm();
		// });
	}

	onSubmit() {
		// const newPartner = new partner(
		//   this.partnerForm.value['name'],
		//   this.partnerForm.value['description'],
		//   this.partnerForm.value['imagePath'],
		//   this.partnerForm.value['ingredients']);
		// if (this.editMode) {
		// 	this.partnerService.updateRecipe(this.id, this.partnerForm.value);
		// } else {
			// this.partnerService.addRecipe(this.partnerForm.value);
		// }
		// this.onCancel();
	}

	onAddIngredient() {
		// (<FormArray>this.partnerForm.get('ingredients')).push(
		// 	new FormGroup({
		// 		name: new FormControl(null, Validators.required),
		// 		amount: new FormControl(null, [
		// 			Validators.required,
		// 			Validators.pattern(/^[1-9]+[0-9]*$/)
		// 		])
		// 	})
		// );
	}

	// onDeleteIngredient(index: number) {
	// 	(<FormArray>this.partnerForm.get('ingredients')).removeAt(index);
	// }

	// onCancel() {
	// 	this.router.navigate(['../'], { relativeTo: this.route });
	// }

	// private initForm() {
	// 	let partnerName = '';
	// 	let partnerImagePath = '';
	// 	let partnerDescription = '';
	// 	let partnerIngredients = new FormArray([]);

	// 	if (this.editMode) {
	// 		const partner = this.partnerService.getRecipe(this.id);
	// 		partnerName = partner.name;
	// 		partnerImagePath = partner.imagePath;
	// 		partnerDescription = partner.description;
	// 		if (partner['ingredients']) {
	// 			for (let ingredient of partner.ingredients) {
	// 				partnerIngredients.push(
	// 					new FormGroup({
	// 						name: new FormControl(ingredient.name, Validators.required),
	// 						amount: new FormControl(ingredient.amount, [
	// 							Validators.required,
	// 							Validators.pattern(/^[1-9]+[0-9]*$/)
	// 						])
	// 					})
	// 				);
	// 			}
	// 		}
	// 	}

	// 	this.partnerForm = new FormGroup({
	// 		name: new FormControl(partnerName, Validators.required),
	// 		imagePath: new FormControl(partnerImagePath, Validators.required),
	// 		description: new FormControl(partnerDescription, Validators.required),
	// 		ingredients: partnerIngredients
	// 	});
	// }
}
