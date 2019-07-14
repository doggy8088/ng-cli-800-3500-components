import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0264Component } from './page0264.component';

@NgModule({
  declarations: [Page0264Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0264Component }])],
  exports: [Page0264Component]
})
export class Page0264Module {}
