import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0237Component } from './page0237.component';

@NgModule({
  declarations: [Page0237Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0237Component }])],
  exports: [Page0237Component]
})
export class Page0237Module {}
