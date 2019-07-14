import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0507Component } from './page0507.component';

@NgModule({
  declarations: [Page0507Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0507Component }])],
  exports: [Page0507Component]
})
export class Page0507Module {}
