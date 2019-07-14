import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2218Component } from './page2218.component';

@NgModule({
  declarations: [Page2218Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2218Component }])],
  exports: [Page2218Component]
})
export class Page2218Module {}
