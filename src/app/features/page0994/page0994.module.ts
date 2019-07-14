import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0994Component } from './page0994.component';

@NgModule({
  declarations: [Page0994Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0994Component }])],
  exports: [Page0994Component]
})
export class Page0994Module {}
