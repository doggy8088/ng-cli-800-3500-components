import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2583Component } from './page2583.component';

@NgModule({
  declarations: [Page2583Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2583Component }])],
  exports: [Page2583Component]
})
export class Page2583Module {}
