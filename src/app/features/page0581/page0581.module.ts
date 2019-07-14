import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0581Component } from './page0581.component';

@NgModule({
  declarations: [Page0581Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0581Component }])],
  exports: [Page0581Component]
})
export class Page0581Module {}
