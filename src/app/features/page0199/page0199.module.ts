import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0199Component } from './page0199.component';

@NgModule({
  declarations: [Page0199Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0199Component }])],
  exports: [Page0199Component]
})
export class Page0199Module {}
