import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0651Component } from './page0651.component';

@NgModule({
  declarations: [Page0651Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0651Component }])],
  exports: [Page0651Component]
})
export class Page0651Module {}
