import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0885Component } from './page0885.component';

@NgModule({
  declarations: [Page0885Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0885Component }])],
  exports: [Page0885Component]
})
export class Page0885Module {}
