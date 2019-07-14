import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1744Component } from './page1744.component';

@NgModule({
  declarations: [Page1744Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1744Component }])],
  exports: [Page1744Component]
})
export class Page1744Module {}
