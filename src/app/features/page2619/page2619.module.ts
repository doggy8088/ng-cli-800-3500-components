import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2619Component } from './page2619.component';

@NgModule({
  declarations: [Page2619Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2619Component }])],
  exports: [Page2619Component]
})
export class Page2619Module {}
