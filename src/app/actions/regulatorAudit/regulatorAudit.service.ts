

import { Injectable } from '@angular/core';
import { DataService } from '../../data.service';
import { Observable } from 'rxjs/Observable';
import { regulatorAudit } from '../../com.stschain.chemicals';
import 'rxjs';

// Can be injected into a constructor
@Injectable()
export class regulatorAuditService {

  private NAMESPACE = 'regulatorAudit';

  constructor(private dataService: DataService<regulatorAudit>) {
  };

  public getAll(): Observable<regulatorAudit[]> {
      return this.dataService.getAll(this.NAMESPACE);
  }

  public getTransaction(id: any): Observable<regulatorAudit> {
    return this.dataService.getSingle(this.NAMESPACE, id);
  }

  public addTransaction(itemToAdd: any): Observable<regulatorAudit> {
    return this.dataService.add(this.NAMESPACE, itemToAdd);
  }

  public updateTransaction(id: any, itemToUpdate: any): Observable<regulatorAudit> {
    return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
  }

  public deleteTransaction(id: any): Observable<regulatorAudit> {
    return this.dataService.delete(this.NAMESPACE, id);
  }

}

