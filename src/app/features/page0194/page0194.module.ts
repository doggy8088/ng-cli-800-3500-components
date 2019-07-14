import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0194Component } from './page0194.component';

@NgModule({
  declarations: [Page0194Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0194Component }])],
  exports: [Page0194Component]
})
export class Page0194Module {}
