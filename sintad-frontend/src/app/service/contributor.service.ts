import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contributor } from '../model/contributor';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class ContributorService extends GenericService<Contributor>{

  contributorChange = new Subject<Contributor[]>;
  private messageChange = new Subject<string>;

  constructor(protected override http: HttpClient) { 
    super(
      http,
      `${environment.HOST}/contribuyentes`
    );
  }

  setDocumentChange(list: Contributor[]) {
    this.contributorChange.next(list);
  }

  getDocumentChange() {
    return this.contributorChange.asObservable();
  }

  setMessageChange(message: string) {
    this.messageChange.next(message);
  }

  getMessageChange() {
    return this.messageChange.asObservable();
  }
}
