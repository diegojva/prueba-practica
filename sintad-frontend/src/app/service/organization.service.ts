import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Organization } from '../model/organization';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService extends GenericService<Organization>{

  organizationChange = new Subject<Organization[]>;
  private messageChange = new Subject<string>;

  constructor(protected override http: HttpClient) { 
    super(
      http,
      `${environment.HOST}/entidades`
    );
  }

  listPageable(p: number, s:number){
    return this.http.get<any>(`${this.url}/pageable?page=${p}&size=${s}`);
  }

  setOrganizationChange(list: Organization[]) {
    this.organizationChange.next(list);
  }

  getOrganizationChange() {
    return this.organizationChange.asObservable();
  }

  setMessageChange(message: string) {
    this.messageChange.next(message);
  }

  getMessageChange() {
    return this.messageChange.asObservable();
  }

}
