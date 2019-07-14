import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2267Component } from './page2267.component';

@NgModule({
  declarations: [Page2267Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2267Component }])],
  exports: [Page2267Component]
})
export class Page2267Module {}
