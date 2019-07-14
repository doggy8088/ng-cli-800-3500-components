import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2629Component } from './page2629.component';

@NgModule({
  declarations: [Page2629Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2629Component }])],
  exports: [Page2629Component]
})
export class Page2629Module {}
