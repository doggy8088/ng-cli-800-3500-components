import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3456Component } from './page3456.component';

@NgModule({
  declarations: [Page3456Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3456Component }])],
  exports: [Page3456Component]
})
export class Page3456Module {}
