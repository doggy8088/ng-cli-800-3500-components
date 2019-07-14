import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0400Component } from './page0400.component';

@NgModule({
  declarations: [Page0400Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0400Component }])],
  exports: [Page0400Component]
})
export class Page0400Module {}
