import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1199Component } from './page1199.component';

@NgModule({
  declarations: [Page1199Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1199Component }])],
  exports: [Page1199Component]
})
export class Page1199Module {}
