import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1775Component } from './page1775.component';

@NgModule({
  declarations: [Page1775Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1775Component }])],
  exports: [Page1775Component]
})
export class Page1775Module {}
