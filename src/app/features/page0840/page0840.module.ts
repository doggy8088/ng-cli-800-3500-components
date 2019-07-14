import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0840Component } from './page0840.component';

@NgModule({
  declarations: [Page0840Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0840Component }])],
  exports: [Page0840Component]
})
export class Page0840Module {}
