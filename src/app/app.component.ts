import { Component } from '@angular/core';
import {ColDef, GridOptions} from 'ag-grid';

@Component({
  selector: 'try-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'try';
  zoom = 4;
  wayPoints = [{location: {lat: 41.946841, lng: -87.702567}}];
  orig = {lat: 42.022794, lng: -87.809814};
  dest = {lat: 26.150488, lng: -80.224006};
  rowData = [
    {label: 'Orig', city: 'NILES', state: 'IL', miles: '0.000', postcode: '60714', stop_latitude: 42.022794, stop_longitude: -87.809814, total_miles: '0.000'},
    {city: 'Chicago', label: 'Stop 1', miles: '9.366', postcode: '60618', state: 'IL', stop_latitude: 41.946841, stop_longitude: -87.702567, total_miles: '9.366'},
    {city: '', label: 'Dest', miles: '1400.380', postcode: '33313', state: '', stop_latitude: 26.150488, stop_longitude: -80.224006, total_miles: '1409.746'}
  ];

  columnDefs: ColDef[] = [
    { headerName: '', width: 70, field: 'label' },
    { headerName: 'city', width: 150, field: 'city' },
    { headerName: 'state', width: 70, field: 'state' },
    { headerName: 'postal', width: 100, field: 'postcode' },
    { headerName: 'miles', width: 100, field: 'miles' },
    { headerName: 'total', width: 100, field: 'total_miles' }
  ];
  gridOptions: GridOptions;

  constructor() {
    this.gridOptions = <GridOptions>{};
    this.gridOptions = {
      onGridReady: () => {
        this.gridOptions.api.setRowData(this.rowData);
      }
    };
    this.gridOptions.columnDefs = this.columnDefs;
  }
}

