import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1801Component } from './page1801.component';

@NgModule({
  declarations: [Page1801Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1801Component }])],
  exports: [Page1801Component]
})
export class Page1801Module {}
