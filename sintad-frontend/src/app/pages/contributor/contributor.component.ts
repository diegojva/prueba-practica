import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap } from 'rxjs';
import { Contributor } from 'src/app/model/contributor';
import { ContributorService } from 'src/app/service/contributor.service';

@Component({
  selector: 'app-contributor',
  templateUrl: './contributor.component.html',
  styleUrls: ['./contributor.component.css']
})
export class ContributorComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'status','actions'];
  dataSource: MatTableDataSource<Contributor>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  totalElements: number;

  constructor(
    private snackBar: MatSnackBar,
    private contributorService: ContributorService
  ) { }

  ngOnInit(): void {
    this.contributorService.contributorChange.subscribe(data => {
      this.createTable(data);
    });

    this.contributorService.getMessageChange().subscribe(data => {
      this.snackBar.open(data, 'INFO', { duration: 2000, verticalPosition: "top", horizontalPosition: "right" });
    });

    this.contributorService.findAll().subscribe(data => {
      this.createTable(data);
    });
  }

  applyFilter(e: any) {
    this.dataSource.filter = e.target.value.trim().toLowerCase();
  }

  delete(idContributor: number){
    let ok = confirm('¿Seguro que deseas eliminar el id: ' + idContributor + '?');
    if(ok){
      this.contributorService.delete(idContributor).pipe(switchMap( ()=> {
        return this.contributorService.findAll();
      }))
      .subscribe(data => {
        this.contributorService.contributorChange.next(data);
        this.contributorService.setMessageChange('DELETED!');
      });
    }
  }

  createTable(contributors: any){
    this.dataSource = new MatTableDataSource(contributors);    
  }

}
