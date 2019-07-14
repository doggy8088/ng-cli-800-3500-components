import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2456Component } from './page2456.component';

@NgModule({
  declarations: [Page2456Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2456Component }])],
  exports: [Page2456Component]
})
export class Page2456Module {}
