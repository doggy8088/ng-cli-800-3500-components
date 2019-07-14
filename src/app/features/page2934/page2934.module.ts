import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2934Component } from './page2934.component';

@NgModule({
  declarations: [Page2934Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2934Component }])],
  exports: [Page2934Component]
})
export class Page2934Module {}
