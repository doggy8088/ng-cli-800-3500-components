import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2707Component } from './page2707.component';

@NgModule({
  declarations: [Page2707Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2707Component }])],
  exports: [Page2707Component]
})
export class Page2707Module {}
