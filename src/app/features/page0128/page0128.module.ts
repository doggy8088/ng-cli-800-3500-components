import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0128Component } from './page0128.component';

@NgModule({
  declarations: [Page0128Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0128Component }])],
  exports: [Page0128Component]
})
export class Page0128Module {}
