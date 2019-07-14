import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2559Component } from './page2559.component';

@NgModule({
  declarations: [Page2559Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2559Component }])],
  exports: [Page2559Component]
})
export class Page2559Module {}
