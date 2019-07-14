import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0883Component } from './page0883.component';

@NgModule({
  declarations: [Page0883Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0883Component }])],
  exports: [Page0883Component]
})
export class Page0883Module {}
