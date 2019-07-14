import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2151Component } from './page2151.component';

@NgModule({
  declarations: [Page2151Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2151Component }])],
  exports: [Page2151Component]
})
export class Page2151Module {}
