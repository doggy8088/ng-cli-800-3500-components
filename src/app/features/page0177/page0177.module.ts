import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0177Component } from './page0177.component';

@NgModule({
  declarations: [Page0177Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0177Component }])],
  exports: [Page0177Component]
})
export class Page0177Module {}
