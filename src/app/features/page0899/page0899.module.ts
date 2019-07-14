import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0899Component } from './page0899.component';

@NgModule({
  declarations: [Page0899Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0899Component }])],
  exports: [Page0899Component]
})
export class Page0899Module {}
