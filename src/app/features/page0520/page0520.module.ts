import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0520Component } from './page0520.component';

@NgModule({
  declarations: [Page0520Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0520Component }])],
  exports: [Page0520Component]
})
export class Page0520Module {}
