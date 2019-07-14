import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0080Component } from './page0080.component';

@NgModule({
  declarations: [Page0080Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0080Component }])],
  exports: [Page0080Component]
})
export class Page0080Module {}
