

import { Injectable } from '@angular/core';
import { DataService } from '../../data.service';
import { Observable } from 'rxjs/Observable';
import { transferListing } from '../../com.stschain.chemicals';
import 'rxjs';

// Can be injected into a constructor
@Injectable()
export class transferListingService {

  private NAMESPACE = 'transferListing';

  constructor(private dataService: DataService<transferListing>) {
  };

  public getAll(): Observable<transferListing[]> {
      return this.dataService.getAll(this.NAMESPACE);
  }

  public getTransaction(id: any): Observable<transferListing> {
    return this.dataService.getSingle(this.NAMESPACE, id);
  }

  public addTransaction(itemToAdd: any): Observable<transferListing> {
    return this.dataService.add(this.NAMESPACE, itemToAdd);
  }

  public updateTransaction(id: any, itemToUpdate: any): Observable<transferListing> {
    return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
  }

  public deleteTransaction(id: any): Observable<transferListing> {
    return this.dataService.delete(this.NAMESPACE, id);
  }

}

