import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0974Component } from './page0974.component';

@NgModule({
  declarations: [Page0974Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0974Component }])],
  exports: [Page0974Component]
})
export class Page0974Module {}
