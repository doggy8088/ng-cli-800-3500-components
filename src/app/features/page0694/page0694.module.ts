import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0694Component } from './page0694.component';

@NgModule({
  declarations: [Page0694Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0694Component }])],
  exports: [Page0694Component]
})
export class Page0694Module {}
