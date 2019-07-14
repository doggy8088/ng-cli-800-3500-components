import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0428Component } from './page0428.component';

@NgModule({
  declarations: [Page0428Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0428Component }])],
  exports: [Page0428Component]
})
export class Page0428Module {}
