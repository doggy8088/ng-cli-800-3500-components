import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1387Component } from './page1387.component';

@NgModule({
  declarations: [Page1387Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1387Component }])],
  exports: [Page1387Component]
})
export class Page1387Module {}
