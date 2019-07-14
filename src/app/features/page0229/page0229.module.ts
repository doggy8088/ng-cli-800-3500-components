import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0229Component } from './page0229.component';

@NgModule({
  declarations: [Page0229Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0229Component }])],
  exports: [Page0229Component]
})
export class Page0229Module {}
