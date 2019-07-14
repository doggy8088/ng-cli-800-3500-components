import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0094Component } from './page0094.component';

@NgModule({
  declarations: [Page0094Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0094Component }])],
  exports: [Page0094Component]
})
export class Page0094Module {}
