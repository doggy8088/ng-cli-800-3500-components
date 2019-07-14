import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0763Component } from './page0763.component';

@NgModule({
  declarations: [Page0763Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0763Component }])],
  exports: [Page0763Component]
})
export class Page0763Module {}
