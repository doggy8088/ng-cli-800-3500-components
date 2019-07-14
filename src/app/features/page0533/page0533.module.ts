import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0533Component } from './page0533.component';

@NgModule({
  declarations: [Page0533Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0533Component }])],
  exports: [Page0533Component]
})
export class Page0533Module {}
