import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0695Component } from './page0695.component';

@NgModule({
  declarations: [Page0695Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0695Component }])],
  exports: [Page0695Component]
})
export class Page0695Module {}
