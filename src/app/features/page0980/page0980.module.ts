import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0980Component } from './page0980.component';

@NgModule({
  declarations: [Page0980Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0980Component }])],
  exports: [Page0980Component]
})
export class Page0980Module {}
