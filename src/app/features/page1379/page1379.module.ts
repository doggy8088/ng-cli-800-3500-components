import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1379Component } from './page1379.component';

@NgModule({
  declarations: [Page1379Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1379Component }])],
  exports: [Page1379Component]
})
export class Page1379Module {}
