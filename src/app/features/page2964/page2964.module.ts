import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2964Component } from './page2964.component';

@NgModule({
  declarations: [Page2964Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2964Component }])],
  exports: [Page2964Component]
})
export class Page2964Module {}
