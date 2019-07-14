import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1784Component } from './page1784.component';

@NgModule({
  declarations: [Page1784Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1784Component }])],
  exports: [Page1784Component]
})
export class Page1784Module {}
