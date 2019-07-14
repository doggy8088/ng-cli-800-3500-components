import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2743Component } from './page2743.component';

@NgModule({
  declarations: [Page2743Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2743Component }])],
  exports: [Page2743Component]
})
export class Page2743Module {}
