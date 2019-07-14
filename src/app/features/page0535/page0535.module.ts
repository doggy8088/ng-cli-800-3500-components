import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0535Component } from './page0535.component';

@NgModule({
  declarations: [Page0535Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0535Component }])],
  exports: [Page0535Component]
})
export class Page0535Module {}
