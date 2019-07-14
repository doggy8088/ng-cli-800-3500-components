import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0003Component } from './page0003.component';

@NgModule({
  declarations: [Page0003Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0003Component }])],
  exports: [Page0003Component]
})
export class Page0003Module {}
