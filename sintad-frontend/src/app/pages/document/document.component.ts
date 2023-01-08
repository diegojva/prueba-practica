import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap } from 'rxjs';
import { Document } from 'src/app/model/document';
import { DocumentsService } from 'src/app/service/documents.service';


@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  displayedColumns: string[] = ['id', 'code', 'name', 'description', 'status','actions'];
  dataSource: MatTableDataSource<Document>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private snackBar: MatSnackBar,
    private documentService: DocumentsService
  ) { }

  ngOnInit(): void {
    this.documentService.documentChange.subscribe(data => {
      this.createTable(data);
    });

    this.documentService.getMessageChange().subscribe(data => {
      this.snackBar.open(data, 'INFO', { duration: 2000, verticalPosition: "top", horizontalPosition: "right" });
    });

    this.documentService.findAll().subscribe(data => {
      this.createTable(data);
    });
  }

  applyFilter(e: any) {
    this.dataSource.filter = e.target.value.trim().toLowerCase();
  }

  delete(idDocument: number){
    let ok = confirm('¿Seguro que deseas eliminar el id: ' + idDocument + '?');
    if(ok){
      this.documentService.delete(idDocument).pipe(switchMap( ()=> {
        return this.documentService.findAll();
      }))
      .subscribe(data => {
        this.documentService.documentChange.next(data);
        this.documentService.setMessageChange('DELETED!');
      });
    }
  }

  createTable(documents: any){
    this.dataSource = new MatTableDataSource(documents);    
  }
}
