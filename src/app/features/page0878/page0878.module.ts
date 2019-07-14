import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0878Component } from './page0878.component';

@NgModule({
  declarations: [Page0878Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0878Component }])],
  exports: [Page0878Component]
})
export class Page0878Module {}
