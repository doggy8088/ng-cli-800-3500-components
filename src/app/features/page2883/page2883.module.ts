import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2883Component } from './page2883.component';

@NgModule({
  declarations: [Page2883Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2883Component }])],
  exports: [Page2883Component]
})
export class Page2883Module {}
