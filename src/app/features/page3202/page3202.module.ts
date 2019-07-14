import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3202Component } from './page3202.component';

@NgModule({
  declarations: [Page3202Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3202Component }])],
  exports: [Page3202Component]
})
export class Page3202Module {}
