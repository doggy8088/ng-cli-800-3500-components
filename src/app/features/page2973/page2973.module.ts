import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2973Component } from './page2973.component';

@NgModule({
  declarations: [Page2973Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2973Component }])],
  exports: [Page2973Component]
})
export class Page2973Module {}
