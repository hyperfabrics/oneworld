import { Component, OnInit, Input } from "@angular/core";
import { Router } from '@angular/router';
import {
	FormGroup,
	FormControl,
	Validators,
	FormBuilder
} from "@angular/forms";
import { regulatorAuditService } from "./regulatorAudit.service";
import "rxjs/add/operator/toPromise";

import { NotificationService } from '../../shared/notification.service';


@Component({
	selector: "app-regulatoraudit",
	templateUrl: "./regulatorAudit.component.html",
	styleUrls: ["./regulatorAudit.component.css"],
	providers: [regulatorAuditService]
})
export class regulatorAuditComponent implements OnInit {

  //Notifications
  from = 'top';
  align = 'right';
  successMessage = 'CheckProduct Transaction Successful... ';
  failMessage = 'Sorry, you are authorized to perform the current transaction - please check with the app admin';

	myForm: FormGroup;

	private transactionID
	private allTransactions;
	private Transaction;
	private currentId;
	private errorMessage;
	OPTIONS: string[] = [
		"INITIALREQUEST",
		"EXEMPTCHECKREQ",
		"HAZARDANALYSISCHECKREQ",
		"CLASSIFIED",
		"TOPSECRET",
		"CHECKCOMPLETED",
		"CANCELLED",
		"REJECTED",
		"WITHIMPORTER",
		"PENDINGREGULATOR",
		"DEFAULT",
		"FRAUD",
		"INCOMPLETE"
	];

	newStatus = new FormControl("", Validators.required);
	regulator = new FormControl("", Validators.required);
	productListing = new FormControl("", Validators.required);
	transactionId = new FormControl("", Validators.required);
	timestamp = new FormControl("", Validators.required);

	constructor(
		private serviceregulatorAudit: regulatorAuditService,
		private router: Router,
    fb: FormBuilder,
    private notificationService: NotificationService
	) {
		this.myForm = fb.group({
			newStatus: this.newStatus,
			regulator: this.regulator,
			productListing: this.productListing,
			transactionId: this.transactionId,
			timestamp: this.timestamp
		});
	}

	ngOnInit(): void {
		this.loadAll();
	}

	loadAll(): Promise<any> {
		const tempList = [];
		return this.serviceregulatorAudit
			.getAll()
			.toPromise()
			.then(result => {
				this.errorMessage = null;
				result.forEach(transaction => {
					tempList.push(transaction);
				});
				this.allTransactions = tempList;
				console.log("regulatorAudit ===>", tempList);
			})
			.catch(error => {
				if (error === "Server error") {
					this.errorMessage =
						"Could not connect to REST server. Please check your configuration details";
				} else if (error === "404 - Not Found") {
					this.errorMessage =
						"404 - Could not find API route. Please check your available APIs.";
				} else {
					this.errorMessage = error;
				}
			});
	}

	/**
	 * Event handler for changing the checked state of a checkbox (handles array enumeration values)
	 * @param {String} name - the name of the transaction field to update
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
	 * only). This is used for checkboxes in the transaction updateDialog.
	 * @param {String} name - the name of the transaction field to check
	 * @param {any} value - the enumeration value to check for
	 * @return {Boolean} whether the specified transaction field contains the provided value
	 */
	hasArrayValue(name: string, value: any): boolean {
		return this[name].value.indexOf(value) !== -1;
	}

	addTransaction(form: any): Promise<any> {
		this.Transaction = {
			$class: "com.stschain.chemicals.regulatorAudit",
			newStatus: this.newStatus.value,
			regulator: this.regulator.value,
			productListing: this.productListing.value,
			transactionId: this.transactionId.value,
			timestamp: "2018-07-21T14:19:21.517Z"
		};

		console.log('Regulator Audit', this.Transaction)

		this.myForm.setValue({
			newStatus: null,
			regulator: null,
			productListing: null,
			transactionId: null,
			timestamp: null
		});




		return this.serviceregulatorAudit
			.addTransaction(this.Transaction)
			.toPromise()
			.then((result) => {
				this.errorMessage = null;
				this.myForm.setValue({
					newStatus: null,
					regulator: null,
					productListing: null,
					transactionId: null,
					timestamp: null
				});
        this.successMessage = 'Your transaciton was successful. Transaction ID: ' + result.transactionId
        this.notificationService.showNotification(this.from, this.align, this.successMessage)
				this.router.navigate(['/productListingContract']);
			})
			.catch(error => {
				console.log('error', error)
				if (error === "Server error") {
					this.errorMessage =
						"Could not connect to REST server. Please check your configuration details";
				} else {
					this.errorMessage = error;
          this.notificationService.showNotification(this.from, this.align, this.failMessage)
          this.router.navigate(['/productListingContract']);

				}
			});
	}

	updateTransaction(form: any): Promise<any> {
		this.Transaction = {
			$class: "com.stschain.chemicals.regulatorAudit",
			newStatus: this.newStatus.value,
			regulator: this.regulator.value,
			productListing: this.productListing.value,
			timestamp: this.timestamp.value
		};

		return this.serviceregulatorAudit
			.updateTransaction(form.get("transactionId").value, this.Transaction)
			.toPromise()
			.then(() => {
				this.errorMessage = null;
			})
			.catch(error => {
				if (error === "Server error") {
					this.errorMessage =
						"Could not connect to REST server. Please check your configuration details";
				} else if (error === "404 - Not Found") {
					this.errorMessage =
						"404 - Could not find API route. Please check your available APIs.";
				} else {
					this.errorMessage = error;
					alert('SORRY, you are authorized to perform the current transaction - please check with the app admin')

				}
			});
	}

	deleteTransaction(): Promise<any> {
		return this.serviceregulatorAudit
			.deleteTransaction(this.currentId)
			.toPromise()
			.then(() => {
				this.errorMessage = null;
			})
			.catch(error => {
				if (error === "Server error") {
					this.errorMessage =
						"Could not connect to REST server. Please check your configuration details";
				} else if (error === "404 - Not Found") {
					this.errorMessage =
						"404 - Could not find API route. Please check your available APIs.";
				} else {
					this.errorMessage = error;
				}
			});
	}

	setId(id: any): void {
		this.currentId = id;
	}

	getForm(id: any): Promise<any> {
		return this.serviceregulatorAudit
			.getTransaction(id)
			.toPromise()
			.then(result => {
				this.errorMessage = null;
				const formObject = {
					newStatus: null,
					regulator: null,
					productListing: null,
					transactionId: null,
					timestamp: null
				};

				if (result.newStatus) {
					formObject.newStatus = result.newStatus;
				} else {
					formObject.newStatus = null;
				}

				if (result.regulator) {
					formObject.regulator = result.regulator;
				} else {
					formObject.regulator = null;
				}

				if (result.productListing) {
					formObject.productListing = result.productListing;
				} else {
					formObject.productListing = null;
				}

				if (result.transactionId) {
					formObject.transactionId = result.transactionId;
				} else {
					formObject.transactionId = null;
				}

				if (result.timestamp) {
					formObject.timestamp = result.timestamp;
				} else {
					formObject.timestamp = null;
				}

				this.myForm.setValue(formObject);
			})
			.catch(error => {
				if (error === "Server error") {
					this.errorMessage =
						"Could not connect to REST server. Please check your configuration details";
				} else if (error === "404 - Not Found") {
					this.errorMessage =
						"404 - Could not find API route. Please check your available APIs.";
				} else {
					this.errorMessage = error;
				}
			});
	}

	resetForm(): void {
		this.myForm.setValue({
			newStatus: null,
			regulator: null,
			productListing: null,
			transactionId: null,
			timestamp: null
		});
	}
}
