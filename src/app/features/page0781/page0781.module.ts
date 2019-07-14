import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0781Component } from './page0781.component';

@NgModule({
  declarations: [Page0781Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0781Component }])],
  exports: [Page0781Component]
})
export class Page0781Module {}
