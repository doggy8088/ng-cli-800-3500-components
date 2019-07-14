import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2774Component } from './page2774.component';

@NgModule({
  declarations: [Page2774Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2774Component }])],
  exports: [Page2774Component]
})
export class Page2774Module {}
