import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0687Component } from './page0687.component';

@NgModule({
  declarations: [Page0687Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0687Component }])],
  exports: [Page0687Component]
})
export class Page0687Module {}
