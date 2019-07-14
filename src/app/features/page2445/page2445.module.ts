import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2445Component } from './page2445.component';

@NgModule({
  declarations: [Page2445Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2445Component }])],
  exports: [Page2445Component]
})
export class Page2445Module {}
