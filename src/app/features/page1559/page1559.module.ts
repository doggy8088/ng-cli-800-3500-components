import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1559Component } from './page1559.component';

@NgModule({
  declarations: [Page1559Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1559Component }])],
  exports: [Page1559Component]
})
export class Page1559Module {}
