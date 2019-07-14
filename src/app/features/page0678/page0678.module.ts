import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0678Component } from './page0678.component';

@NgModule({
  declarations: [Page0678Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0678Component }])],
  exports: [Page0678Component]
})
export class Page0678Module {}
