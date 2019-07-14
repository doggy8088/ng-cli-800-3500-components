import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0621Component } from './page0621.component';

@NgModule({
  declarations: [Page0621Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0621Component }])],
  exports: [Page0621Component]
})
export class Page0621Module {}
