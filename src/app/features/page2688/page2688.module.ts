import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2688Component } from './page2688.component';

@NgModule({
  declarations: [Page2688Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2688Component }])],
  exports: [Page2688Component]
})
export class Page2688Module {}
