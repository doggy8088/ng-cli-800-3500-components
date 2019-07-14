import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0847Component } from './page0847.component';

@NgModule({
  declarations: [Page0847Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0847Component }])],
  exports: [Page0847Component]
})
export class Page0847Module {}
