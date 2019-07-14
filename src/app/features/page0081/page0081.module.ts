import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0081Component } from './page0081.component';

@NgModule({
  declarations: [Page0081Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0081Component }])],
  exports: [Page0081Component]
})
export class Page0081Module {}
