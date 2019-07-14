import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0830Component } from './page0830.component';

@NgModule({
  declarations: [Page0830Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0830Component }])],
  exports: [Page0830Component]
})
export class Page0830Module {}
