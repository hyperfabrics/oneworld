

import { Injectable } from '@angular/core';
import { DataService } from '../../data.service';
import { Observable } from 'rxjs/Observable';
import { checkProducts } from '../../com.stschain.chemicals';
import 'rxjs';

// Can be injected into a constructor
@Injectable()
export class checkProductsService {

  private NAMESPACE = 'checkProducts';

  constructor(private dataService: DataService<checkProducts>) {
  };

  public getAll(): Observable<checkProducts[]> {
      return this.dataService.getAll(this.NAMESPACE);
  }

  public getTransaction(id: any): Observable<checkProducts> {
    return this.dataService.getSingle(this.NAMESPACE, id);
  }

  public addTransaction(itemToAdd: any): Observable<checkProducts> {
    return this.dataService.add(this.NAMESPACE, itemToAdd);
  }

  public updateTransaction(id: any, itemToUpdate: any): Observable<checkProducts> {
    return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
  }

  public deleteTransaction(id: any): Observable<checkProducts> {
    return this.dataService.delete(this.NAMESPACE, id);
  }

}

