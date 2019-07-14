import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1599Component } from './page1599.component';

@NgModule({
  declarations: [Page1599Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1599Component }])],
  exports: [Page1599Component]
})
export class Page1599Module {}
