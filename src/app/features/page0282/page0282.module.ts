import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0282Component } from './page0282.component';

@NgModule({
  declarations: [Page0282Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0282Component }])],
  exports: [Page0282Component]
})
export class Page0282Module {}
