import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1544Component } from './page1544.component';

@NgModule({
  declarations: [Page1544Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1544Component }])],
  exports: [Page1544Component]
})
export class Page1544Module {}
