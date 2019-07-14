import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2430Component } from './page2430.component';

@NgModule({
  declarations: [Page2430Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2430Component }])],
  exports: [Page2430Component]
})
export class Page2430Module {}
