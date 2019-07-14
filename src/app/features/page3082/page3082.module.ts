import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3082Component } from './page3082.component';

@NgModule({
  declarations: [Page3082Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3082Component }])],
  exports: [Page3082Component]
})
export class Page3082Module {}
