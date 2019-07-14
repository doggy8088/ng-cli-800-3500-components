import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0365Component } from './page0365.component';

@NgModule({
  declarations: [Page0365Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0365Component }])],
  exports: [Page0365Component]
})
export class Page0365Module {}
