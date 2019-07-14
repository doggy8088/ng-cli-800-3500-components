import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3123Component } from './page3123.component';

@NgModule({
  declarations: [Page3123Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3123Component }])],
  exports: [Page3123Component]
})
export class Page3123Module {}
