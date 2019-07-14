import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2473Component } from './page2473.component';

@NgModule({
  declarations: [Page2473Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2473Component }])],
  exports: [Page2473Component]
})
export class Page2473Module {}
