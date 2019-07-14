import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0865Component } from './page0865.component';

@NgModule({
  declarations: [Page0865Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0865Component }])],
  exports: [Page0865Component]
})
export class Page0865Module {}
