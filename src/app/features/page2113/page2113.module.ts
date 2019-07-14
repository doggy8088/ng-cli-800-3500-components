import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2113Component } from './page2113.component';

@NgModule({
  declarations: [Page2113Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2113Component }])],
  exports: [Page2113Component]
})
export class Page2113Module {}
