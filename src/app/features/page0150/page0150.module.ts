import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0150Component } from './page0150.component';

@NgModule({
  declarations: [Page0150Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0150Component }])],
  exports: [Page0150Component]
})
export class Page0150Module {}
