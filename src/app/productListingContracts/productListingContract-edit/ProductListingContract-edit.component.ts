import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

// import { RecipeService } from '../productListingContract.service';

@Component({
	selector: 'app-productListingContract-edit',
	templateUrl: './ProductListingContract-edit.component.html',
	styleUrls: ['./ProductListingContract-edit.component.css']
})
export class ProductListingContractEditComponent implements OnInit {
	id: string;
	editMode = false;
	productListingContractForm: FormGroup;

	constructor(
		private route: ActivatedRoute,
		// private productListingContractService: RecipeService,
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
		// const newProductListingContract = new productListingContract(
		//   this.productListingContractForm.value['name'],
		//   this.productListingContractForm.value['description'],
		//   this.productListingContractForm.value['imagePath'],
		//   this.productListingContractForm.value['ingredients']);
		// if (this.editMode) {
		// 	this.productListingContractService.updateRecipe(this.id, this.productListingContractForm.value);
		// } else {
			// this.productListingContractService.addRecipe(this.productListingContractForm.value);
		// }
		// this.onCancel();
	}

	onAddIngredient() {
		// (<FormArray>this.productListingContractForm.get('ingredients')).push(
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
	// 	(<FormArray>this.productListingContractForm.get('ingredients')).removeAt(index);
	// }

	// onCancel() {
	// 	this.router.navigate(['../'], { relativeTo: this.route });
	// }

	// private initForm() {
	// 	let productListingContractName = '';
	// 	let productListingContractImagePath = '';
	// 	let productListingContractDescription = '';
	// 	let productListingContractIngredients = new FormArray([]);

	// 	if (this.editMode) {
	// 		const productListingContract = this.productListingContractService.getRecipe(this.id);
	// 		productListingContractName = productListingContract.name;
	// 		productListingContractImagePath = productListingContract.imagePath;
	// 		productListingContractDescription = productListingContract.description;
	// 		if (productListingContract['ingredients']) {
	// 			for (let ingredient of productListingContract.ingredients) {
	// 				productListingContractIngredients.push(
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

	// 	this.productListingContractForm = new FormGroup({
	// 		name: new FormControl(productListingContractName, Validators.required),
	// 		imagePath: new FormControl(productListingContractImagePath, Validators.required),
	// 		description: new FormControl(productListingContractDescription, Validators.required),
	// 		ingredients: productListingContractIngredients
	// 	});
	// }
}
