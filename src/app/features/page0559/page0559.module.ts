import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0559Component } from './page0559.component';

@NgModule({
  declarations: [Page0559Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0559Component }])],
  exports: [Page0559Component]
})
export class Page0559Module {}
