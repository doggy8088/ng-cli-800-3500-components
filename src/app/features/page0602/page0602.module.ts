import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0602Component } from './page0602.component';

@NgModule({
  declarations: [Page0602Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0602Component }])],
  exports: [Page0602Component]
})
export class Page0602Module {}
