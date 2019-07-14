import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0258Component } from './page0258.component';

@NgModule({
  declarations: [Page0258Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0258Component }])],
  exports: [Page0258Component]
})
export class Page0258Module {}
