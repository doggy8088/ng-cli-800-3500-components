import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0341Component } from './page0341.component';

@NgModule({
  declarations: [Page0341Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0341Component }])],
  exports: [Page0341Component]
})
export class Page0341Module {}
