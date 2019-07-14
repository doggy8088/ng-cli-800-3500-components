import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0771Component } from './page0771.component';

@NgModule({
  declarations: [Page0771Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0771Component }])],
  exports: [Page0771Component]
})
export class Page0771Module {}
