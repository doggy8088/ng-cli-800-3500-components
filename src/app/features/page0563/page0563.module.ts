import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0563Component } from './page0563.component';

@NgModule({
  declarations: [Page0563Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0563Component }])],
  exports: [Page0563Component]
})
export class Page0563Module {}
