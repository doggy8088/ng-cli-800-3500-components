import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2662Component } from './page2662.component';

@NgModule({
  declarations: [Page2662Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2662Component }])],
  exports: [Page2662Component]
})
export class Page2662Module {}
