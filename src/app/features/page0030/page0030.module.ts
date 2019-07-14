import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0030Component } from './page0030.component';

@NgModule({
  declarations: [Page0030Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0030Component }])],
  exports: [Page0030Component]
})
export class Page0030Module {}
