import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0802Component } from './page0802.component';

@NgModule({
  declarations: [Page0802Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0802Component }])],
  exports: [Page0802Component]
})
export class Page0802Module {}
