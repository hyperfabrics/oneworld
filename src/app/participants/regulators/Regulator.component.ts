

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RegulatorService } from './Regulator.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-regulator',
  templateUrl: './Regulator.component.html',
  styleUrls: ['./Regulator.component.css'],
  providers: [RegulatorService]
})
export class RegulatorComponent implements OnInit {

  myForm: FormGroup;

  private allParticipants = [];;
  private participant;
  private currentId;
  private errorMessage;

  regulatorId = new FormControl('', Validators.required);
  exemptedOrgIds = new FormControl('', Validators.required);
  exemptedProductIds = new FormControl('', Validators.required);
  ministryCode = new FormControl('', Validators.required);
  ministryName = new FormControl('', Validators.required);
  Employees = new FormControl('', Validators.required);
  address = new FormControl('', Validators.required);
  identity = new FormControl('', Validators.required);


  constructor(public serviceRegulator: RegulatorService, fb: FormBuilder) {
    this.myForm = fb.group({
      regulatorId: this.regulatorId,
      exemptedOrgIds: this.exemptedOrgIds,
      exemptedProductIds: this.exemptedProductIds,
      ministryCode: this.ministryCode,
      ministryName: this.ministryName,
      Employees: this.Employees,
      address: this.address,
      identity: this.identity
    });
  };

  ngOnInit(): void {
    this.loadAll();
	}

	isEmptyList(): boolean{
		return this.allParticipants.length===0
	}

  loadAll(): Promise<any> {
    const tempList = [];
    return this.serviceRegulator.getAll()
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      result.forEach(participant => {
        tempList.push(participant);
      });
			this.allParticipants = tempList;
			console.log('Regulators ===>', tempList )

    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
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
      $class: 'com.stschain.chemicals.Regulator',
      'regulatorId': this.regulatorId.value,
      'exemptedOrgIds': this.exemptedOrgIds.value,
      'exemptedProductIds': this.exemptedProductIds.value,
      'ministryCode': this.ministryCode.value,
      'ministryName': this.ministryName.value,
      'Employees': this.Employees.value,
      'address': this.address.value,
      'identity': this.identity.value
    };

    this.myForm.setValue({
      'regulatorId': null,
      'exemptedOrgIds': null,
      'exemptedProductIds': null,
      'ministryCode': null,
      'ministryName': null,
      'Employees': null,
      'address': null,
      'identity': null
    });

    return this.serviceRegulator.addParticipant(this.participant)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.myForm.setValue({
        'regulatorId': null,
        'exemptedOrgIds': null,
        'exemptedProductIds': null,
        'ministryCode': null,
        'ministryName': null,
        'Employees': null,
        'address': null,
        'identity': null
      });
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else {
        this.errorMessage = error;
      }
    });
  }


   updateParticipant(form: any): Promise<any> {
    this.participant = {
      $class: 'com.stschain.chemicals.Regulator',
      'exemptedOrgIds': this.exemptedOrgIds.value,
      'exemptedProductIds': this.exemptedProductIds.value,
      'ministryCode': this.ministryCode.value,
      'ministryName': this.ministryName.value,
      'Employees': this.Employees.value,
      'address': this.address.value,
      'identity': this.identity.value
    };

    return this.serviceRegulator.updateParticipant(form.get('regulatorId').value, this.participant)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }


  deleteParticipant(): Promise<any> {

    return this.serviceRegulator.deleteParticipant(this.currentId)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

  setId(id: any): void {
    this.currentId = id;
  }

  getForm(id: any): Promise<any> {

    return this.serviceRegulator.getparticipant(id)
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      const formObject = {
        'regulatorId': null,
        'exemptedOrgIds': null,
        'exemptedProductIds': null,
        'ministryCode': null,
        'ministryName': null,
        'Employees': null,
        'address': null,
        'identity': null
      };

      if (result.regulatorId) {
        formObject.regulatorId = result.regulatorId;
      } else {
        formObject.regulatorId = null;
      }

      if (result.exemptedOrgIds) {
        formObject.exemptedOrgIds = result.exemptedOrgIds;
      } else {
        formObject.exemptedOrgIds = null;
      }

      if (result.exemptedProductIds) {
        formObject.exemptedProductIds = result.exemptedProductIds;
      } else {
        formObject.exemptedProductIds = null;
      }

      if (result.ministryCode) {
        formObject.ministryCode = result.ministryCode;
      } else {
        formObject.ministryCode = null;
      }

      if (result.ministryName) {
        formObject.ministryName = result.ministryName;
      } else {
        formObject.ministryName = null;
      }

      if (result.Employees) {
        formObject.Employees = result.Employees;
      } else {
        formObject.Employees = null;
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

      this.myForm.setValue(formObject);
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });

  }

  resetForm(): void {
    this.myForm.setValue({
      'regulatorId': null,
      'exemptedOrgIds': null,
      'exemptedProductIds': null,
      'ministryCode': null,
      'ministryName': null,
      'Employees': null,
      'address': null,
      'identity': null
    });
  }
}
