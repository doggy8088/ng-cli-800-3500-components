import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1124Component } from './page1124.component';

@NgModule({
  declarations: [Page1124Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1124Component }])],
  exports: [Page1124Component]
})
export class Page1124Module {}
