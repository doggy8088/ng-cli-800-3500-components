import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0932Component } from './page0932.component';

@NgModule({
  declarations: [Page0932Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0932Component }])],
  exports: [Page0932Component]
})
export class Page0932Module {}
