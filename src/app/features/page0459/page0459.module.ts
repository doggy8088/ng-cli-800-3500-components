import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0459Component } from './page0459.component';

@NgModule({
  declarations: [Page0459Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0459Component }])],
  exports: [Page0459Component]
})
export class Page0459Module {}
