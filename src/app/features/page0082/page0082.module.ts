import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0082Component } from './page0082.component';

@NgModule({
  declarations: [Page0082Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0082Component }])],
  exports: [Page0082Component]
})
export class Page0082Module {}
