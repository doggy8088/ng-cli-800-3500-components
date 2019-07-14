import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0986Component } from './page0986.component';

@NgModule({
  declarations: [Page0986Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0986Component }])],
  exports: [Page0986Component]
})
export class Page0986Module {}
