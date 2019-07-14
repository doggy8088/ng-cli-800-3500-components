import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0112Component } from './page0112.component';

@NgModule({
  declarations: [Page0112Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0112Component }])],
  exports: [Page0112Component]
})
export class Page0112Module {}
