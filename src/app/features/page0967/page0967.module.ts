import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0967Component } from './page0967.component';

@NgModule({
  declarations: [Page0967Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0967Component }])],
  exports: [Page0967Component]
})
export class Page0967Module {}
