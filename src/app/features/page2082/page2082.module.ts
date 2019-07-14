import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2082Component } from './page2082.component';

@NgModule({
  declarations: [Page2082Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2082Component }])],
  exports: [Page2082Component]
})
export class Page2082Module {}
