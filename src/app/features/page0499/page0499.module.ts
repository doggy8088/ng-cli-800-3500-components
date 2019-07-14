import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0499Component } from './page0499.component';

@NgModule({
  declarations: [Page0499Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0499Component }])],
  exports: [Page0499Component]
})
export class Page0499Module {}
