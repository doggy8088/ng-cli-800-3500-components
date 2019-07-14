import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2004Component } from './page2004.component';

@NgModule({
  declarations: [Page2004Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2004Component }])],
  exports: [Page2004Component]
})
export class Page2004Module {}
