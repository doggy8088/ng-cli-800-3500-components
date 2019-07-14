import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2123Component } from './page2123.component';

@NgModule({
  declarations: [Page2123Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2123Component }])],
  exports: [Page2123Component]
})
export class Page2123Module {}
