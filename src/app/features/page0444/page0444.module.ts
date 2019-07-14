import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0444Component } from './page0444.component';

@NgModule({
  declarations: [Page0444Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0444Component }])],
  exports: [Page0444Component]
})
export class Page0444Module {}
