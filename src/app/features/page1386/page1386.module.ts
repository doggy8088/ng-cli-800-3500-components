import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1386Component } from './page1386.component';

@NgModule({
  declarations: [Page1386Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1386Component }])],
  exports: [Page1386Component]
})
export class Page1386Module {}
