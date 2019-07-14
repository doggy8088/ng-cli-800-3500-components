import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1213Component } from './page1213.component';

@NgModule({
  declarations: [Page1213Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1213Component }])],
  exports: [Page1213Component]
})
export class Page1213Module {}
