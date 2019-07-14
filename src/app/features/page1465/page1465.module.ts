import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1465Component } from './page1465.component';

@NgModule({
  declarations: [Page1465Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1465Component }])],
  exports: [Page1465Component]
})
export class Page1465Module {}
