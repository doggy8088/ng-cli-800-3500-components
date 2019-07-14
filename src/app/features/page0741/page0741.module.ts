import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0741Component } from './page0741.component';

@NgModule({
  declarations: [Page0741Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0741Component }])],
  exports: [Page0741Component]
})
export class Page0741Module {}
