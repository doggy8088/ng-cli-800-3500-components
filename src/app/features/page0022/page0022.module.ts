import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0022Component } from './page0022.component';

@NgModule({
  declarations: [Page0022Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0022Component }])],
  exports: [Page0022Component]
})
export class Page0022Module {}
