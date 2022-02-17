import { Component, OnInit, Input } from '@angular/core';
import {
	FormGroup,
	FormControl,
	Validators,
	FormBuilder
} from '@angular/forms';
import 'rxjs/add/operator/toPromise';

import { ImporterService } from './Importer.service';

@Component({
	selector: 'app-importer',
	templateUrl: './Importer.component.html',
	styleUrls: ['./Importer.component.css'],
	providers: [ImporterService]
})
export class ImporterComponent implements OnInit {
	myForm: FormGroup;

	private allParticipants = [];
	private participant;
	private currentId;
	private errorMessage;

	importerId = new FormControl('', Validators.required);
	companyID = new FormControl('', Validators.required);
	companyName = new FormControl('', Validators.required);
	companyActivity = new FormControl('', Validators.required);
	employees = new FormControl('', Validators.required);
	address = new FormControl('', Validators.required);
	identity = new FormControl('', Validators.required);
	civilDefenceNumber = new FormControl('', Validators.required);

	constructor(public serviceImporter: ImporterService, fb: FormBuilder) {
		this.myForm = fb.group({
			importerId: this.importerId,
			companyID: this.companyID,
			companyName: this.companyName,
			companyActivity: this.companyActivity,
			employees: this.employees,
			address: this.address,
			identity: this.identity,
			civilDefenceNumber: this.civilDefenceNumber
		});
	}

	ngOnInit(): void {
		this.loadAll();
	}

	isEmptyList(): boolean{
		return this.allParticipants.length===0
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
				console.log('Importers ===>', tempList);
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

	/**
	 * Event handler for changing the checked state of a checkbox (handles array enumeration values)
	 * @param {String} name - the name of the participant field to update
	 * @param {any} value - the enumeration value for which to toggle the checked state
	 */
	changeArrayValue(name: string, value: any): void {
		const index = this[name].value.indexOf(value);
		if (index === -1) {
			this[name].value.push(value);
		} else {
			this[name].value.splice(index, 1);
		}
	}

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
	 * only). This is used for checkboxes in the participant updateDialog.
	 * @param {String} name - the name of the participant field to check
	 * @param {any} value - the enumeration value to check for
	 * @return {Boolean} whether the specified participant field contains the provided value
	 */
	hasArrayValue(name: string, value: any): boolean {
		return this[name].value.indexOf(value) !== -1;
	}

	addParticipant(form: any): Promise<any> {
		this.participant = {
			$class: 'com.stschain.chemicals.Importer',
			importerId: this.importerId.value,
			companyID: this.companyID.value,
			companyName: this.companyName.value,
			companyActivity: this.companyActivity.value,
			employees: this.employees.value,
			address: this.address.value,
			identity: this.identity.value,
			civilDefenceNumber: this.civilDefenceNumber.value
		};

		this.myForm.setValue({
			importerId: null,
			companyID: null,
			companyName: null,
			companyActivity: null,
			employees: null,
			address: null,
			identity: null,
			civilDefenceNumber: null
		});

		return this.serviceImporter
			.addParticipant(this.participant)
			.toPromise()
			.then(() => {
				this.errorMessage = null;
				this.myForm.setValue({
					importerId: null,
					companyID: null,
					companyName: null,
					companyActivity: null,
					employees: null,
					address: null,
					identity: null,
					civilDefenceNumber: null
				});
				this.loadAll();
			})
			.catch(error => {
				if (error === 'Server error') {
					this.errorMessage =
						'Could not connect to REST server. Please check your configuration details';
				} else {
					this.errorMessage = error;
				}
			});
	}

	updateParticipant(form: any): Promise<any> {
		this.participant = {
			$class: 'com.stschain.chemicals.Importer',
			companyID: this.companyID.value,
			companyName: this.companyName.value,
			companyActivity: this.companyActivity.value,
			employees: this.employees.value,
			address: this.address.value,
			identity: this.identity.value,
			civilDefenceNumber: this.civilDefenceNumber.value
		};

		return this.serviceImporter
			.updateParticipant(form.get('importerId').value, this.participant)
			.toPromise()
			.then(() => {
				this.errorMessage = null;
				this.loadAll();
			})
			.catch(error => {
				if (error === 'Server error') {
					this.errorMessage =
						'Could not connect to REST server. Please check your configuration details';
				} else if (error === '404 - Not Found') {
					this.errorMessage =
						'404 - Could not find API route. Please check your available APIs.';
				} else {
					this.errorMessage = error;
				}
			});
	}

	deleteParticipant(): Promise<any> {
		return this.serviceImporter
			.deleteParticipant(this.currentId)
			.toPromise()
			.then(() => {
				this.errorMessage = null;
				this.loadAll();
			})
			.catch(error => {
				if (error === 'Server error') {
					this.errorMessage =
						'Could not connect to REST server. Please check your configuration details';
				} else if (error === '404 - Not Found') {
					this.errorMessage =
						'404 - Could not find API route. Please check your available APIs.';
				} else {
					this.errorMessage = error;
				}
			});
	}

	setId(id: any): void {
		this.currentId = id;
	}

	getForm(id: any): Promise<any> {
		return this.serviceImporter
			.getparticipant(id)
			.toPromise()
			.then(result => {
				this.errorMessage = null;
				const formObject = {
					importerId: null,
					companyID: null,
					companyName: null,
					companyActivity: null,
					employees: null,
					address: null,
					identity: null,
					civilDefenceNumber: null
				};

				if (result.importerId) {
					formObject.importerId = result.importerId;
				} else {
					formObject.importerId = null;
				}

				if (result.companyID) {
					formObject.companyID = result.companyID;
				} else {
					formObject.companyID = null;
				}

				if (result.companyName) {
					formObject.companyName = result.companyName;
				} else {
					formObject.companyName = null;
				}

				if (result.companyActivity) {
					formObject.companyActivity = result.companyActivity;
				} else {
					formObject.companyActivity = null;
				}

				if (result.employees) {
					formObject.employees = result.employees;
				} else {
					formObject.employees = null;
				}

				if (result.address) {
					formObject.address = result.address;
				} else {
					formObject.address = null;
				}

				if (result.identity) {
					formObject.identity = result.identity;
				} else {
					formObject.identity = null;
				}

				if (result.civilDefenceNumber) {
					formObject.civilDefenceNumber = result.civilDefenceNumber;
				} else {
					formObject.civilDefenceNumber = null;
				}

				this.myForm.setValue(formObject);
			})
			.catch(error => {
				if (error === 'Server error') {
					this.errorMessage =
						'Could not connect to REST server. Please check your configuration details';
				} else if (error === '404 - Not Found') {
					this.errorMessage =
						'404 - Could not find API route. Please check your available APIs.';
				} else {
					this.errorMessage = error;
				}
			});
	}

	resetForm(): void {
		this.myForm.setValue({
			importerId: null,
			companyID: null,
			companyName: null,
			companyActivity: null,
			employees: null,
			address: null,
			identity: null,
			civilDefenceNumber: null
		});
	}
}
