import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2292Component } from './page2292.component';

@NgModule({
  declarations: [Page2292Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2292Component }])],
  exports: [Page2292Component]
})
export class Page2292Module {}
