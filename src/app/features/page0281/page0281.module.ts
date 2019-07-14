import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0281Component } from './page0281.component';

@NgModule({
  declarations: [Page0281Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0281Component }])],
  exports: [Page0281Component]
})
export class Page0281Module {}
