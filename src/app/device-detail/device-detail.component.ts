import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { devices } from '../devices';

@Component({
  selector: 'device-detail',
  templateUrl: 'device-detail.component.html',
  styleUrls: ['device-detail.component.css']
})
export class DeviceDetail implements OnInit {
  device;
  constructor(private route: ActivatedRoute) {
   
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.device = devices.filter(d => d.deviceId == params.get('deviceid'))[0];
    });
  }

}