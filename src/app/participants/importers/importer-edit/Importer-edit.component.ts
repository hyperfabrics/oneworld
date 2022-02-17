import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

// import { RecipeService } from '../importer.service';

@Component({
	selector: 'app-importer-edit',
	templateUrl: './Importer-edit.component.html',
	styleUrls: ['./Importer-edit.component.css']
})
export class ImporterEditComponent implements OnInit {
	id: string;
	editMode = false;
	importerForm: FormGroup;

	constructor(
		private route: ActivatedRoute,
		// private importerService: RecipeService,
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
		// const newImporter = new importer(
		//   this.importerForm.value['name'],
		//   this.importerForm.value['description'],
		//   this.importerForm.value['imagePath'],
		//   this.importerForm.value['ingredients']);
		// if (this.editMode) {
		// 	this.importerService.updateRecipe(this.id, this.importerForm.value);
		// } else {
			// this.importerService.addRecipe(this.importerForm.value);
		// }
		// this.onCancel();
	}

	onAddIngredient() {
		// (<FormArray>this.importerForm.get('ingredients')).push(
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
	// 	(<FormArray>this.importerForm.get('ingredients')).removeAt(index);
	// }

	// onCancel() {
	// 	this.router.navigate(['../'], { relativeTo: this.route });
	// }

	// private initForm() {
	// 	let importerName = '';
	// 	let importerImagePath = '';
	// 	let importerDescription = '';
	// 	let importerIngredients = new FormArray([]);

	// 	if (this.editMode) {
	// 		const importer = this.importerService.getRecipe(this.id);
	// 		importerName = importer.name;
	// 		importerImagePath = importer.imagePath;
	// 		importerDescription = importer.description;
	// 		if (importer['ingredients']) {
	// 			for (let ingredient of importer.ingredients) {
	// 				importerIngredients.push(
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

	// 	this.importerForm = new FormGroup({
	// 		name: new FormControl(importerName, Validators.required),
	// 		imagePath: new FormControl(importerImagePath, Validators.required),
	// 		description: new FormControl(importerDescription, Validators.required),
	// 		ingredients: importerIngredients
	// 	});
	// }
}
