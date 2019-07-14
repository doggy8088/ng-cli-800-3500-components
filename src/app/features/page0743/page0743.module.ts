import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0743Component } from './page0743.component';

@NgModule({
  declarations: [Page0743Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0743Component }])],
  exports: [Page0743Component]
})
export class Page0743Module {}
