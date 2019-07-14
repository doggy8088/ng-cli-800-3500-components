import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0359Component } from './page0359.component';

@NgModule({
  declarations: [Page0359Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0359Component }])],
  exports: [Page0359Component]
})
export class Page0359Module {}
