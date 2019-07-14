import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0569Component } from './page0569.component';

@NgModule({
  declarations: [Page0569Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0569Component }])],
  exports: [Page0569Component]
})
export class Page0569Module {}
