
import { Injectable } from '@angular/core';
import { DataService } from '../../data.service';
import { Observable } from 'rxjs/Observable';
import { updateExemptedList } from '../../com.stschain.chemicals';
import 'rxjs';

// Can be injected into a constructor
@Injectable()
export class updateExemptedListService {

  private NAMESPACE = 'updateExemptedList';

  constructor(private dataService: DataService<updateExemptedList>) {
  };

  public getAll(): Observable<updateExemptedList[]> {
      return this.dataService.getAll(this.NAMESPACE);
  }

  public getTransaction(id: any): Observable<updateExemptedList> {
    return this.dataService.getSingle(this.NAMESPACE, id);
  }

  public addTransaction(itemToAdd: any): Observable<updateExemptedList> {
    return this.dataService.add(this.NAMESPACE, itemToAdd);
  }

  public updateTransaction(id: any, itemToUpdate: any): Observable<updateExemptedList> {
    return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
  }

  public deleteTransaction(id: any): Observable<updateExemptedList> {
    return this.dataService.delete(this.NAMESPACE, id);
  }

}

