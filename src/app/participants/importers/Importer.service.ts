

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

import { DataService } from '../../data.service';
import { Importer } from '../../com.stschain.chemicals';


// Can be injected into a constructor
@Injectable()
export class ImporterService {

  private NAMESPACE = 'Importer';

  constructor(private dataService: DataService<Importer>) {
  };

  public getAll(): Observable<Importer[]> {
    return this.dataService.getAll(this.NAMESPACE);
  }

  public getparticipant(id: any): Observable<Importer> {
    return this.dataService.getSingle(this.NAMESPACE, id);
  }

  public addParticipant(itemToAdd: any): Observable<Importer> {
    return this.dataService.add(this.NAMESPACE, itemToAdd);
  }

  public updateParticipant(id: any, itemToUpdate: any): Observable<Importer> {
    return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
  }

  public deleteParticipant(id: any): Observable<Importer> {
    return this.dataService.delete(this.NAMESPACE, id);
  }

}
