import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0048Component } from './page0048.component';

@NgModule({
  declarations: [Page0048Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0048Component }])],
  exports: [Page0048Component]
})
export class Page0048Module {}
