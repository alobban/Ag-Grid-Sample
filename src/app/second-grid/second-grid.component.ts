import { Component, OnInit } from '@angular/core';
import {ColDef, GridOptions} from 'ag-grid';

@Component({
  selector: 'try-second-grid',
  templateUrl: './second-grid.component.html',
  styleUrls: ['./second-grid.component.scss']
})
export class SecondGridComponent implements OnInit {

  displayedColumns: ColDef[] = [
    { headerName: 'Day', width: 100, field: 'day' },
    { headerName: 'Open', width: 100, field: 'open' },
    { headerName: 'Close', width: 100, field: 'close' }
  ];
  private gridOptions: GridOptions;
  opHours = [
    {'day': 'Sun', 'open': '8:00', 'close': '22:00'},
    {'day': 'Mon', 'open': '8:00', 'close': '22:00'}
  ];

  constructor() {
    /*this.gridOptions = <GridOptions>{};
    this.gridOptions = {
      onGridReady: () => {
        this.gridOptions.api.setRowData(this.opHours);
      },
      onGridSizeChanged: () => {
        this.gridOptions.api.sizeColumnsToFit();
      }
    };
    this.gridOptions.columnDefs = this.displayedColumns;
    this.gridOptions.rowData = this.opHours;
    console.log(this.gridOptions);*/
  }

  ngOnInit() {
  }

}
