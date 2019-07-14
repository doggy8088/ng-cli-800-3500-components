import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2017Component } from './page2017.component';

@NgModule({
  declarations: [Page2017Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2017Component }])],
  exports: [Page2017Component]
})
export class Page2017Module {}
