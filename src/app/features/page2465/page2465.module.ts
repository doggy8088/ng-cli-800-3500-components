import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2465Component } from './page2465.component';

@NgModule({
  declarations: [Page2465Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2465Component }])],
  exports: [Page2465Component]
})
export class Page2465Module {}
