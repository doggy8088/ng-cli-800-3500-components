import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2203Component } from './page2203.component';

@NgModule({
  declarations: [Page2203Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2203Component }])],
  exports: [Page2203Component]
})
export class Page2203Module {}
