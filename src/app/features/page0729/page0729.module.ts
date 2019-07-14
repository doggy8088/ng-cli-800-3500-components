import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0729Component } from './page0729.component';

@NgModule({
  declarations: [Page0729Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0729Component }])],
  exports: [Page0729Component]
})
export class Page0729Module {}
