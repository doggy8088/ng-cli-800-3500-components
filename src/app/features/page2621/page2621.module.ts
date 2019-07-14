import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2621Component } from './page2621.component';

@NgModule({
  declarations: [Page2621Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2621Component }])],
  exports: [Page2621Component]
})
export class Page2621Module {}
