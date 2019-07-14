import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1783Component } from './page1783.component';

@NgModule({
  declarations: [Page1783Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1783Component }])],
  exports: [Page1783Component]
})
export class Page1783Module {}
