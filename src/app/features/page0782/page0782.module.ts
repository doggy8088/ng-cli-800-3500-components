import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0782Component } from './page0782.component';

@NgModule({
  declarations: [Page0782Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0782Component }])],
  exports: [Page0782Component]
})
export class Page0782Module {}
