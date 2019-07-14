import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0249Component } from './page0249.component';

@NgModule({
  declarations: [Page0249Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0249Component }])],
  exports: [Page0249Component]
})
export class Page0249Module {}
