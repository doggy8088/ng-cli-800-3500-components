import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2598Component } from './page2598.component';

@NgModule({
  declarations: [Page2598Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2598Component }])],
  exports: [Page2598Component]
})
export class Page2598Module {}
