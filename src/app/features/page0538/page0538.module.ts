import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0538Component } from './page0538.component';

@NgModule({
  declarations: [Page0538Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0538Component }])],
  exports: [Page0538Component]
})
export class Page0538Module {}
