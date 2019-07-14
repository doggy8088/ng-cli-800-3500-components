import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2089Component } from './page2089.component';

@NgModule({
  declarations: [Page2089Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2089Component }])],
  exports: [Page2089Component]
})
export class Page2089Module {}
