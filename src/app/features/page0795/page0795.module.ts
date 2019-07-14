import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0795Component } from './page0795.component';

@NgModule({
  declarations: [Page0795Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0795Component }])],
  exports: [Page0795Component]
})
export class Page0795Module {}
