import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Document } from '../model/document';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService extends GenericService<Document>{

  documentChange = new Subject<Document[]>;
  private messageChange = new Subject<string>;

  constructor(protected override http: HttpClient) { 
    super(
      http,
      `${environment.HOST}/documentos`
    );
  }

  setDocumentChange(list: Document[]) {
    this.documentChange.next(list);
  }

  getDocumentChange() {
    return this.documentChange.asObservable();
  }

  setMessageChange(message: string) {
    this.messageChange.next(message);
  }

  getMessageChange() {
    return this.messageChange.asObservable();
  }
}
