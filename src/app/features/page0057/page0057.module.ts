import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0057Component } from './page0057.component';

@NgModule({
  declarations: [Page0057Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0057Component }])],
  exports: [Page0057Component]
})
export class Page0057Module {}
