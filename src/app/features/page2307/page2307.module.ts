import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2307Component } from './page2307.component';

@NgModule({
  declarations: [Page2307Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2307Component }])],
  exports: [Page2307Component]
})
export class Page2307Module {}
