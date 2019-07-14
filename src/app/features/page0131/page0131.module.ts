import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0131Component } from './page0131.component';

@NgModule({
  declarations: [Page0131Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0131Component }])],
  exports: [Page0131Component]
})
export class Page0131Module {}
