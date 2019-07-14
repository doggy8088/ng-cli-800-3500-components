import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2283Component } from './page2283.component';

@NgModule({
  declarations: [Page2283Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2283Component }])],
  exports: [Page2283Component]
})
export class Page2283Module {}
