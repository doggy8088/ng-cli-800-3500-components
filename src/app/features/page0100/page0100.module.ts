import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0100Component } from './page0100.component';

@NgModule({
  declarations: [Page0100Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0100Component }])],
  exports: [Page0100Component]
})
export class Page0100Module {}
