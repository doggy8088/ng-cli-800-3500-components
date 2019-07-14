import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0186Component } from './page0186.component';

@NgModule({
  declarations: [Page0186Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0186Component }])],
  exports: [Page0186Component]
})
export class Page0186Module {}
