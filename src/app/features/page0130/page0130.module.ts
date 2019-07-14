import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0130Component } from './page0130.component';

@NgModule({
  declarations: [Page0130Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0130Component }])],
  exports: [Page0130Component]
})
export class Page0130Module {}
