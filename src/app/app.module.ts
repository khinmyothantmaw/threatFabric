import '../polyfills';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RouterModule } from '@angular/router'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from '../app/material-module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { AppComponent } from './app.component';
// import {TableSortingExample} from './app/table-sorting-example';
import {DeviceList} from '../app/device-list/device-list.component';
import {DeviceDetail} from '../app/device-detail/device-detail.component';

// Default MatFormField appearance to 'fill' as that is the new recommended approach and the
// `legacy` and `standard` appearances are scheduled for deprecation in version 10.
// This makes the examples that use MatFormField render the same in StackBlitz as on the docs site.


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: DeviceList },
      { path: 'devices/:deviceid', component: DeviceDetail}
    ])
  ],
  declarations: [AppComponent,DeviceList, DeviceDetail],
  bootstrap: [AppComponent],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

