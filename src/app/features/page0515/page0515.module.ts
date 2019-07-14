import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0515Component } from './page0515.component';

@NgModule({
  declarations: [Page0515Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0515Component }])],
  exports: [Page0515Component]
})
export class Page0515Module {}
