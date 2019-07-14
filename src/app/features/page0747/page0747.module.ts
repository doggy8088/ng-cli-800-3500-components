import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0747Component } from './page0747.component';

@NgModule({
  declarations: [Page0747Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0747Component }])],
  exports: [Page0747Component]
})
export class Page0747Module {}
