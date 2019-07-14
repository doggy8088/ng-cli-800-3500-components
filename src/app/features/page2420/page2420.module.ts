import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2420Component } from './page2420.component';

@NgModule({
  declarations: [Page2420Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2420Component }])],
  exports: [Page2420Component]
})
export class Page2420Module {}
