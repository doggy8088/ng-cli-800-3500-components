import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2661Component } from './page2661.component';

@NgModule({
  declarations: [Page2661Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2661Component }])],
  exports: [Page2661Component]
})
export class Page2661Module {}
