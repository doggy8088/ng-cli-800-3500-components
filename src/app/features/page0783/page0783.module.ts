import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0783Component } from './page0783.component';

@NgModule({
  declarations: [Page0783Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0783Component }])],
  exports: [Page0783Component]
})
export class Page0783Module {}
