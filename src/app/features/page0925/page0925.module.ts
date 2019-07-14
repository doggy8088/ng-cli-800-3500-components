import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0925Component } from './page0925.component';

@NgModule({
  declarations: [Page0925Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0925Component }])],
  exports: [Page0925Component]
})
export class Page0925Module {}
