import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0668Component } from './page0668.component';

@NgModule({
  declarations: [Page0668Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0668Component }])],
  exports: [Page0668Component]
})
export class Page0668Module {}
