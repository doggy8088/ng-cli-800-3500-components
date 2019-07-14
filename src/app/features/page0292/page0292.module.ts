import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0292Component } from './page0292.component';

@NgModule({
  declarations: [Page0292Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0292Component }])],
  exports: [Page0292Component]
})
export class Page0292Module {}
