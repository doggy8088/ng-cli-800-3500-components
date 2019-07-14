import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1272Component } from './page1272.component';

@NgModule({
  declarations: [Page1272Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1272Component }])],
  exports: [Page1272Component]
})
export class Page1272Module {}
