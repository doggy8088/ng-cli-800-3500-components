import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0027Component } from './page0027.component';

@NgModule({
  declarations: [Page0027Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0027Component }])],
  exports: [Page0027Component]
})
export class Page0027Module {}
