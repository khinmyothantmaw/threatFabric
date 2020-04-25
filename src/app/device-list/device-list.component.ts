import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import {devices} from '../devices';



/**
 * @title Table with sorting
 */
@Component({
  selector: 'device-list',
  styleUrls: ['device-list.component.css'],
  templateUrl: 'device-list.component.html',
})
export class DeviceList implements OnInit {
  displayedColumns: string[] = ['deviceId', 'deviceType', 'riskLevel','lastSeen'];
  dataSource = new MatTableDataSource(devices);
  deviceList = devices;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */