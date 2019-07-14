import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0192Component } from './page0192.component';

@NgModule({
  declarations: [Page0192Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0192Component }])],
  exports: [Page0192Component]
})
export class Page0192Module {}
