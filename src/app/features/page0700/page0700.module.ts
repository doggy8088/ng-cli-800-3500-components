import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0700Component } from './page0700.component';

@NgModule({
  declarations: [Page0700Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0700Component }])],
  exports: [Page0700Component]
})
export class Page0700Module {}
