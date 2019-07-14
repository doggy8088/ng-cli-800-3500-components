import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2103Component } from './page2103.component';

@NgModule({
  declarations: [Page2103Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2103Component }])],
  exports: [Page2103Component]
})
export class Page2103Module {}
