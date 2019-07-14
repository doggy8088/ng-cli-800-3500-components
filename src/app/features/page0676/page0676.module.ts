import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0676Component } from './page0676.component';

@NgModule({
  declarations: [Page0676Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0676Component }])],
  exports: [Page0676Component]
})
export class Page0676Module {}
