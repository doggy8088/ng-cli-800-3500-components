import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1863Component } from './page1863.component';

@NgModule({
  declarations: [Page1863Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1863Component }])],
  exports: [Page1863Component]
})
export class Page1863Module {}
