import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0017Component } from './page0017.component';

@NgModule({
  declarations: [Page0017Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0017Component }])],
  exports: [Page0017Component]
})
export class Page0017Module {}
