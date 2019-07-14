import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0901Component } from './page0901.component';

@NgModule({
  declarations: [Page0901Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0901Component }])],
  exports: [Page0901Component]
})
export class Page0901Module {}
