import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0725Component } from './page0725.component';

@NgModule({
  declarations: [Page0725Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0725Component }])],
  exports: [Page0725Component]
})
export class Page0725Module {}
