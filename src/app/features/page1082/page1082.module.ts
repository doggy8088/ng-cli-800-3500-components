import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1082Component } from './page1082.component';

@NgModule({
  declarations: [Page1082Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1082Component }])],
  exports: [Page1082Component]
})
export class Page1082Module {}
