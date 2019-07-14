import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0863Component } from './page0863.component';

@NgModule({
  declarations: [Page0863Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0863Component }])],
  exports: [Page0863Component]
})
export class Page0863Module {}
