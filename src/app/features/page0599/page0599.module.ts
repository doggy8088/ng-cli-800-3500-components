import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0599Component } from './page0599.component';

@NgModule({
  declarations: [Page0599Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0599Component }])],
  exports: [Page0599Component]
})
export class Page0599Module {}
