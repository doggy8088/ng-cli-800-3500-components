import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0905Component } from './page0905.component';

@NgModule({
  declarations: [Page0905Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0905Component }])],
  exports: [Page0905Component]
})
export class Page0905Module {}
