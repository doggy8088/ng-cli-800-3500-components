import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1457Component } from './page1457.component';

@NgModule({
  declarations: [Page1457Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1457Component }])],
  exports: [Page1457Component]
})
export class Page1457Module {}
