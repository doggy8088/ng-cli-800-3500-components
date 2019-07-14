import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2909Component } from './page2909.component';

@NgModule({
  declarations: [Page2909Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2909Component }])],
  exports: [Page2909Component]
})
export class Page2909Module {}
