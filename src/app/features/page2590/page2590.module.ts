import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2590Component } from './page2590.component';

@NgModule({
  declarations: [Page2590Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2590Component }])],
  exports: [Page2590Component]
})
export class Page2590Module {}
