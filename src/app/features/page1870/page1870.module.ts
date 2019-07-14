import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1870Component } from './page1870.component';

@NgModule({
  declarations: [Page1870Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1870Component }])],
  exports: [Page1870Component]
})
export class Page1870Module {}
