import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2341Component } from './page2341.component';

@NgModule({
  declarations: [Page2341Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2341Component }])],
  exports: [Page2341Component]
})
export class Page2341Module {}
