import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0259Component } from './page0259.component';

@NgModule({
  declarations: [Page0259Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0259Component }])],
  exports: [Page0259Component]
})
export class Page0259Module {}
