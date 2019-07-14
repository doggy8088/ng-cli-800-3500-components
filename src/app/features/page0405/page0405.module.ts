import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0405Component } from './page0405.component';

@NgModule({
  declarations: [Page0405Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0405Component }])],
  exports: [Page0405Component]
})
export class Page0405Module {}
