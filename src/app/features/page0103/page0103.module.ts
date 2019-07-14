import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0103Component } from './page0103.component';

@NgModule({
  declarations: [Page0103Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0103Component }])],
  exports: [Page0103Component]
})
export class Page0103Module {}
