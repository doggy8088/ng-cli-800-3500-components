import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0338Component } from './page0338.component';

@NgModule({
  declarations: [Page0338Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0338Component }])],
  exports: [Page0338Component]
})
export class Page0338Module {}
