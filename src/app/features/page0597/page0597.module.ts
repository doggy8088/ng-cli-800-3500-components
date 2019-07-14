import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0597Component } from './page0597.component';

@NgModule({
  declarations: [Page0597Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0597Component }])],
  exports: [Page0597Component]
})
export class Page0597Module {}
