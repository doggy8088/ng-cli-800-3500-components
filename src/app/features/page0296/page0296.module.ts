import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0296Component } from './page0296.component';

@NgModule({
  declarations: [Page0296Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0296Component }])],
  exports: [Page0296Component]
})
export class Page0296Module {}
