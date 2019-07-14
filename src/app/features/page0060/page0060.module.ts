import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0060Component } from './page0060.component';

@NgModule({
  declarations: [Page0060Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0060Component }])],
  exports: [Page0060Component]
})
export class Page0060Module {}
