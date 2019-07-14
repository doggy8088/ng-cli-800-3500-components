import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0191Component } from './page0191.component';

@NgModule({
  declarations: [Page0191Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0191Component }])],
  exports: [Page0191Component]
})
export class Page0191Module {}
