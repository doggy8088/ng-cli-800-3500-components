import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0482Component } from './page0482.component';

@NgModule({
  declarations: [Page0482Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0482Component }])],
  exports: [Page0482Component]
})
export class Page0482Module {}
