import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0313Component } from './page0313.component';

@NgModule({
  declarations: [Page0313Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0313Component }])],
  exports: [Page0313Component]
})
export class Page0313Module {}
