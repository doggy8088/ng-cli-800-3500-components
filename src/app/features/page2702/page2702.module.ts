import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2702Component } from './page2702.component';

@NgModule({
  declarations: [Page2702Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2702Component }])],
  exports: [Page2702Component]
})
export class Page2702Module {}
