import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1151Component } from './page1151.component';

@NgModule({
  declarations: [Page1151Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1151Component }])],
  exports: [Page1151Component]
})
export class Page1151Module {}
