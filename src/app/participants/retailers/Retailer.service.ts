
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

import { DataService } from '../../data.service';
import { Retailer } from '../../com.stschain.chemicals';


// Can be injected into a constructor
@Injectable()
export class RetailerService {

  private NAMESPACE = 'Retailer';

  constructor(private dataService: DataService<Retailer>) {
  };

  public getAll(): Observable<Retailer[]> {
    return this.dataService.getAll(this.NAMESPACE);
  }

  public getparticipant(id: any): Observable<Retailer> {
    return this.dataService.getSingle(this.NAMESPACE, id);
  }

  public addParticipant(itemToAdd: any): Observable<Retailer> {
    return this.dataService.add(this.NAMESPACE, itemToAdd);
  }

  public updateParticipant(id: any, itemToUpdate: any): Observable<Retailer> {
    return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
  }

  public deleteParticipant(id: any): Observable<Retailer> {
    return this.dataService.delete(this.NAMESPACE, id);
  }

}
