import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0164Component } from './page0164.component';

@NgModule({
  declarations: [Page0164Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0164Component }])],
  exports: [Page0164Component]
})
export class Page0164Module {}
