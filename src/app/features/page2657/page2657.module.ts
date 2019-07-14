import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2657Component } from './page2657.component';

@NgModule({
  declarations: [Page2657Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2657Component }])],
  exports: [Page2657Component]
})
export class Page2657Module {}
