import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0826Component } from './page0826.component';

@NgModule({
  declarations: [Page0826Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0826Component }])],
  exports: [Page0826Component]
})
export class Page0826Module {}
