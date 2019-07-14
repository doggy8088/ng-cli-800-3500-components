import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0868Component } from './page0868.component';

@NgModule({
  declarations: [Page0868Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0868Component }])],
  exports: [Page0868Component]
})
export class Page0868Module {}
