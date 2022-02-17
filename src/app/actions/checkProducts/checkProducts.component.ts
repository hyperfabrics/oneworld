import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { checkProductsService } from './checkProducts.service';
import { NotificationService } from '../../shared/notification.service';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-checkproducts',
  templateUrl: './checkProducts.component.html',
  styleUrls: ['./checkProducts.component.css'],
  providers: [checkProductsService]
})
export class checkProductsComponent implements OnInit {
  //Notifications
  from = 'top';
  align = 'right';
  successMessage = 'CheckProduct Transaction Successful... ';
  failMessage = 'Sorry, you are authorized to perform the current transaction - please check with the app admin';

  myForm: FormGroup;

  private allTransactions;
  private Transaction;
  private currentId;
  private errorMessage;

  regulator = new FormControl('', Validators.required);
  productListing = new FormControl('', Validators.required);
  transactionId = new FormControl('', Validators.required);
  timestamp = new FormControl('', Validators.required);

  constructor(
    private servicecheckProducts: checkProductsService,
    fb: FormBuilder,
    private router: Router,
    private notificationService: NotificationService
  ) {
    this.myForm = fb.group({
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
    return this.servicecheckProducts
      .getAll()
      .toPromise()
      .then(result => {
        this.errorMessage = null;
        result.forEach(transaction => {
          tempList.push(transaction);
        });
        this.allTransactions = tempList;
        this.allTransactions = tempList;
        console.log('checkProducts ===>', tempList);
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
      $class: 'com.stschain.chemicals.checkProducts',
      regulator: this.regulator.value,
      productListing: this.productListing.value,
      transactionId: this.transactionId.value,
      timestamp: '2018-07-21T14:19:21.517Z'
    };

    this.myForm.setValue({
      regulator: null,
      productListing: null,
      transactionId: null,
      timestamp: null
    });

    return this.servicecheckProducts
      .addTransaction(this.Transaction)
      .toPromise()
      .then((result) => {
        this.errorMessage = null;
        this.myForm.setValue({
          regulator: null,
          productListing: null,
          transactionId: null,
          timestamp: null
        });
        var message = this.successMessage + 'trasaction ID: ' +
        this.notificationService.showNotification(
          this.from,
          this.align,
          this.successMessage
        );
        this.successMessage = 'Your transaciton was successful. Transaction ID: ' + result.transactionId
        this.notificationService.showNotification(this.from, this.align, this.successMessage)
				this.router.navigate(['/productListingContract']);
      })
      .catch(error => {
        if (error === 'Server error') {
          this.errorMessage =
            'Could not connect to REST server. Please check your configuration details';
        } else {
          this.errorMessage = error;
          this.notificationService.showNotification(
            this.from,
            this.align,
            this.failMessage
          );
          this.router.navigate(['/productListingContract']);
        }
      });
  }

  updateTransaction(form: any): Promise<any> {
    this.Transaction = {
      $class: 'com.stschain.chemicals.checkProducts',
      regulator: this.regulator.value,
      productListing: this.productListing.value,
      timestamp: this.timestamp.value
    };

    return this.servicecheckProducts
      .updateTransaction(form.get('transactionId').value, this.Transaction)
      .toPromise()
      .then(() => {
        this.errorMessage = null;
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

  deleteTransaction(): Promise<any> {
    return this.servicecheckProducts
      .deleteTransaction(this.currentId)
      .toPromise()
      .then(() => {
        this.errorMessage = null;
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
    return this.servicecheckProducts
      .getTransaction(id)
      .toPromise()
      .then(result => {
        this.errorMessage = null;
        const formObject = {
          regulator: null,
          productListing: null,
          transactionId: null,
          timestamp: null
        };

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
      regulator: null,
      productListing: null,
      transactionId: null,
      timestamp: null
    });
  }
}
