import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2374Component } from './page2374.component';

@NgModule({
  declarations: [Page2374Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2374Component }])],
  exports: [Page2374Component]
})
export class Page2374Module {}
