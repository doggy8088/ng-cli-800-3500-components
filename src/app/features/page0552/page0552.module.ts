import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0552Component } from './page0552.component';

@NgModule({
  declarations: [Page0552Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0552Component }])],
  exports: [Page0552Component]
})
export class Page0552Module {}
