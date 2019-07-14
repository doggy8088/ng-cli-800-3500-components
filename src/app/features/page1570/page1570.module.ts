import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1570Component } from './page1570.component';

@NgModule({
  declarations: [Page1570Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1570Component }])],
  exports: [Page1570Component]
})
export class Page1570Module {}
