import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0635Component } from './page0635.component';

@NgModule({
  declarations: [Page0635Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0635Component }])],
  exports: [Page0635Component]
})
export class Page0635Module {}
