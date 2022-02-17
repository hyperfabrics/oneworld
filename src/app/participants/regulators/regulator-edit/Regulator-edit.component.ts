import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

// import { RecipeService } from '../regulator.service';

@Component({
	selector: 'app-regulator-edit',
	templateUrl: './Regulator-edit.component.html',
	styleUrls: ['./Regulator-edit.component.css']
})
export class RegulatorEditComponent implements OnInit {
	id: string;
	editMode = false;
	regulatorForm: FormGroup;

	constructor(
		private route: ActivatedRoute,
		// private regulatorService: RecipeService,
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
		// const newRegulator = new regulator(
		//   this.regulatorForm.value['name'],
		//   this.regulatorForm.value['description'],
		//   this.regulatorForm.value['imagePath'],
		//   this.regulatorForm.value['ingredients']);
		// if (this.editMode) {
		// 	this.regulatorService.updateRecipe(this.id, this.regulatorForm.value);
		// } else {
			// this.regulatorService.addRecipe(this.regulatorForm.value);
		// }
		// this.onCancel();
	}

	onAddIngredient() {
		// (<FormArray>this.regulatorForm.get('ingredients')).push(
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
	// 	(<FormArray>this.regulatorForm.get('ingredients')).removeAt(index);
	// }

	// onCancel() {
	// 	this.router.navigate(['../'], { relativeTo: this.route });
	// }

	// private initForm() {
	// 	let regulatorName = '';
	// 	let regulatorImagePath = '';
	// 	let regulatorDescription = '';
	// 	let regulatorIngredients = new FormArray([]);

	// 	if (this.editMode) {
	// 		const regulator = this.regulatorService.getRecipe(this.id);
	// 		regulatorName = regulator.name;
	// 		regulatorImagePath = regulator.imagePath;
	// 		regulatorDescription = regulator.description;
	// 		if (regulator['ingredients']) {
	// 			for (let ingredient of regulator.ingredients) {
	// 				regulatorIngredients.push(
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

	// 	this.regulatorForm = new FormGroup({
	// 		name: new FormControl(regulatorName, Validators.required),
	// 		imagePath: new FormControl(regulatorImagePath, Validators.required),
	// 		description: new FormControl(regulatorDescription, Validators.required),
	// 		ingredients: regulatorIngredients
	// 	});
	// }
}
