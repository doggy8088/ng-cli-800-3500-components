import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0148Component } from './page0148.component';

@NgModule({
  declarations: [Page0148Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0148Component }])],
  exports: [Page0148Component]
})
export class Page0148Module {}
