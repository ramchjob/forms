import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from './model/customer';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  customers: Customer[] = JSON.parse('[{"id":"1", "name":"First Name"}, {"id":"2", "name":"First Name2"}, {"id":"3", "name":"First Name3"}]');
    customerColumns: string[] = [
        'id',
        'name'
    ];
    customerDataSource: MatTableDataSource<Customer>;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    displaySpinner: boolean;

  ngOnInit(): void {
    this.initializeDatasource(this.customers);
  }
  initializeDatasource(customers: Customer[]) {
    this.customerDataSource = new MatTableDataSource<Customer>(
      customers
  );
  this.customerDataSource.paginator = this.paginator;
  this.customerDataSource.sort = this.sort;
  }

}
