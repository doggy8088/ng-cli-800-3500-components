import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2340Component } from './page2340.component';

@NgModule({
  declarations: [Page2340Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2340Component }])],
  exports: [Page2340Component]
})
export class Page2340Module {}
