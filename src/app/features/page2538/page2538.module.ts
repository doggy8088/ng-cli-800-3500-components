import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2538Component } from './page2538.component';

@NgModule({
  declarations: [Page2538Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2538Component }])],
  exports: [Page2538Component]
})
export class Page2538Module {}
