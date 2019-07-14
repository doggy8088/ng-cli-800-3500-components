import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0362Component } from './page0362.component';

@NgModule({
  declarations: [Page0362Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0362Component }])],
  exports: [Page0362Component]
})
export class Page0362Module {}
