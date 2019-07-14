import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0204Component } from './page0204.component';

@NgModule({
  declarations: [Page0204Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0204Component }])],
  exports: [Page0204Component]
})
export class Page0204Module {}
