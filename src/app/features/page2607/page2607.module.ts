import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2607Component } from './page2607.component';

@NgModule({
  declarations: [Page2607Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2607Component }])],
  exports: [Page2607Component]
})
export class Page2607Module {}
