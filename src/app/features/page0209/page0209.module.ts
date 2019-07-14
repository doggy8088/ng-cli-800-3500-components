import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0209Component } from './page0209.component';

@NgModule({
  declarations: [Page0209Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0209Component }])],
  exports: [Page0209Component]
})
export class Page0209Module {}
