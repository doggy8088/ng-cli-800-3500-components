import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0247Component } from './page0247.component';

@NgModule({
  declarations: [Page0247Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0247Component }])],
  exports: [Page0247Component]
})
export class Page0247Module {}
