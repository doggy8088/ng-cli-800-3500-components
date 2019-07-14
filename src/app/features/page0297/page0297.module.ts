import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0297Component } from './page0297.component';

@NgModule({
  declarations: [Page0297Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0297Component }])],
  exports: [Page0297Component]
})
export class Page0297Module {}
