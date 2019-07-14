import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2408Component } from './page2408.component';

@NgModule({
  declarations: [Page2408Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2408Component }])],
  exports: [Page2408Component]
})
export class Page2408Module {}
