

import { Injectable } from '@angular/core';
import { DataService } from '../../data.service';
import { Observable } from 'rxjs/Observable';
import { Regulator } from '../../com.stschain.chemicals';
import 'rxjs';

// Can be injected into a constructor
@Injectable()
export class RegulatorService {

  private NAMESPACE = 'Regulator';

  constructor(private dataService: DataService<Regulator>) {
  };

  public getAll(): Observable<Regulator[]> {
    return this.dataService.getAll(this.NAMESPACE);
  }

  public getparticipant(id: any): Observable<Regulator> {
    return this.dataService.getSingle(this.NAMESPACE, id);
  }

  public addParticipant(itemToAdd: any): Observable<Regulator> {
    return this.dataService.add(this.NAMESPACE, itemToAdd);
  }

  public updateParticipant(id: any, itemToUpdate: any): Observable<Regulator> {
    return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
  }

  public deleteParticipant(id: any): Observable<Regulator> {
    return this.dataService.delete(this.NAMESPACE, id);
  }

}
