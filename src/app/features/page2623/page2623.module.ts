import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2623Component } from './page2623.component';

@NgModule({
  declarations: [Page2623Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2623Component }])],
  exports: [Page2623Component]
})
export class Page2623Module {}
