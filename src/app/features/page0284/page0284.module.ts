import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0284Component } from './page0284.component';

@NgModule({
  declarations: [Page0284Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0284Component }])],
  exports: [Page0284Component]
})
export class Page0284Module {}
