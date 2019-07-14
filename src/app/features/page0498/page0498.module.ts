import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0498Component } from './page0498.component';

@NgModule({
  declarations: [Page0498Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0498Component }])],
  exports: [Page0498Component]
})
export class Page0498Module {}
