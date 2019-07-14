import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0230Component } from './page0230.component';

@NgModule({
  declarations: [Page0230Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0230Component }])],
  exports: [Page0230Component]
})
export class Page0230Module {}
