import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2876Component } from './page2876.component';

@NgModule({
  declarations: [Page2876Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2876Component }])],
  exports: [Page2876Component]
})
export class Page2876Module {}
