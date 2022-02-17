

import { Injectable } from '@angular/core';
import { DataService } from '../../data.service';
import { Observable } from 'rxjs/Observable';
import { createProductListing } from '../../com.stschain.chemicals';
import 'rxjs';

// Can be injected into a constructor
@Injectable()
export class createProductListingService {

  private NAMESPACE = 'createProductListing';

  constructor(private dataService: DataService<createProductListing>) {
  };

  public getAll(): Observable<createProductListing[]> {
      return this.dataService.getAll(this.NAMESPACE);
  }

  public getTransaction(id: any): Observable<createProductListing> {
    return this.dataService.getSingle(this.NAMESPACE, id);
  }

  public addTransaction(itemToAdd: any): Observable<createProductListing> {
    return this.dataService.add(this.NAMESPACE, itemToAdd);
  }

  public updateTransaction(id: any, itemToUpdate: any): Observable<createProductListing> {
    return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
  }

  public deleteTransaction(id: any): Observable<createProductListing> {
    return this.dataService.delete(this.NAMESPACE, id);
  }

}

