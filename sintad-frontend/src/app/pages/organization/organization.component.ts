import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap } from 'rxjs';
import { Organization } from 'src/app/model/organization';
import { OrganizationService } from 'src/app/service/organization.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  displayedColumns: string[] = ['id', 'id_type_document', 'nro_document', 'companyName', 'commercialName', 'id_type_contributor', 'address','phone','status','actions'];
  dataSource: MatTableDataSource<Organization>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  totalElements: number;

  constructor(
    private snackBar: MatSnackBar,
    private organizationService: OrganizationService
  ) { }

  ngOnInit(): void {
    this.organizationService.organizationChange.subscribe(data => {
      this.createTable(data);
    });

    this.organizationService.getMessageChange().subscribe(data => {
      this.snackBar.open(data, 'INFO', { duration: 2000, verticalPosition: "top", horizontalPosition: "right" });
    });

    this.organizationService.listPageable(0, 5).subscribe(data => {
      this.createTable(data);
    });
  }

  applyFilter(e: any) {
    this.dataSource.filter = e.target.value.trim().toLowerCase();
  }

  delete(idOrganization: number){
    let ok = confirm('¿Seguro que deseas eliminar el id: ' + idOrganization + '?');
    if(ok){
      this.organizationService.delete(idOrganization).pipe(switchMap( ()=> {
        return this.organizationService.listPageable(0,5);
      }))
      .subscribe(data => {
        this.organizationService.organizationChange.next(data);
        this.organizationService.setMessageChange('DELETED!');
      });
    }
  }

  createTable(organizations: any){
    this.dataSource = new MatTableDataSource(organizations.content);    
    this.totalElements = organizations.totalElements;     
  }

  showMore(e: any){
    this.organizationService.listPageable(e.pageIndex, e.pageSize).subscribe(data => this.createTable(data));
  }


}
