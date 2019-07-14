import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2234Component } from './page2234.component';

@NgModule({
  declarations: [Page2234Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2234Component }])],
  exports: [Page2234Component]
})
export class Page2234Module {}
