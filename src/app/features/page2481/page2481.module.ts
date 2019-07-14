import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2481Component } from './page2481.component';

@NgModule({
  declarations: [Page2481Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2481Component }])],
  exports: [Page2481Component]
})
export class Page2481Module {}
