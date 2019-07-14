import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2904Component } from './page2904.component';

@NgModule({
  declarations: [Page2904Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2904Component }])],
  exports: [Page2904Component]
})
export class Page2904Module {}
