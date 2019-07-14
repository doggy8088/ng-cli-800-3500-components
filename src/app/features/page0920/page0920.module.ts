import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0920Component } from './page0920.component';

@NgModule({
  declarations: [Page0920Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0920Component }])],
  exports: [Page0920Component]
})
export class Page0920Module {}
