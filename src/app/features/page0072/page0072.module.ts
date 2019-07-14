import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0072Component } from './page0072.component';

@NgModule({
  declarations: [Page0072Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0072Component }])],
  exports: [Page0072Component]
})
export class Page0072Module {}
