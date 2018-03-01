import { Component } from '@angular/core';
import {ColDef, GridOptions} from 'ag-grid';

@Component({
  selector: 'try-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'try';
  rowData = [
    {make: 'Toyota', model: 'Celica', price: 35000},
    {make: 'Ford', model: 'Mondeo', price: 32000},
    {make: 'Porsche', model: 'Boxter', price: 72000}
  ];

  columnDefs: ColDef[] = [
    {headerName: 'Make', field: 'make'},
    {headerName: 'Model', field: 'model'},
    {headerName: 'Price', field: 'price'}
  ];
  gridOptions: GridOptions;

  constructor() {
    this.gridOptions = <GridOptions>{};
    this.gridOptions = {
      onGridReady: () => {
        this.gridOptions.api.setRowData(this.rowData);
      }
    };
    // this.gridOptions.api.setRowData(this.mileageStopSource);
    this.gridOptions.columnDefs = this.columnDefs;
  }
}

