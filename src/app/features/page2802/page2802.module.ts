import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2802Component } from './page2802.component';

@NgModule({
  declarations: [Page2802Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2802Component }])],
  exports: [Page2802Component]
})
export class Page2802Module {}
