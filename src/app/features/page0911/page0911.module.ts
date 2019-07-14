import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0911Component } from './page0911.component';

@NgModule({
  declarations: [Page0911Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0911Component }])],
  exports: [Page0911Component]
})
export class Page0911Module {}
