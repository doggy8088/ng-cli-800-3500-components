import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2665Component } from './page2665.component';

@NgModule({
  declarations: [Page2665Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2665Component }])],
  exports: [Page2665Component]
})
export class Page2665Module {}
