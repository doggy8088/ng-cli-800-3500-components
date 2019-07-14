import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0492Component } from './page0492.component';

@NgModule({
  declarations: [Page0492Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0492Component }])],
  exports: [Page0492Component]
})
export class Page0492Module {}
