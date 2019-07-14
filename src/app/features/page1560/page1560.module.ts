import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1560Component } from './page1560.component';

@NgModule({
  declarations: [Page1560Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1560Component }])],
  exports: [Page1560Component]
})
export class Page1560Module {}
