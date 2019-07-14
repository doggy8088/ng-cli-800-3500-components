import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2744Component } from './page2744.component';

@NgModule({
  declarations: [Page2744Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2744Component }])],
  exports: [Page2744Component]
})
export class Page2744Module {}
