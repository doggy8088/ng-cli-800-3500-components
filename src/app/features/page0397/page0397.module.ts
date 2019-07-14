import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0397Component } from './page0397.component';

@NgModule({
  declarations: [Page0397Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0397Component }])],
  exports: [Page0397Component]
})
export class Page0397Module {}
