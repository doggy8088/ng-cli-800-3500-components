import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0702Component } from './page0702.component';

@NgModule({
  declarations: [Page0702Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0702Component }])],
  exports: [Page0702Component]
})
export class Page0702Module {}
