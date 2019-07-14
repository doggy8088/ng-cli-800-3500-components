import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0203Component } from './page0203.component';

@NgModule({
  declarations: [Page0203Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0203Component }])],
  exports: [Page0203Component]
})
export class Page0203Module {}
