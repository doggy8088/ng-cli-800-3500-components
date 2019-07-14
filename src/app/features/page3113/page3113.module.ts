import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3113Component } from './page3113.component';

@NgModule({
  declarations: [Page3113Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3113Component }])],
  exports: [Page3113Component]
})
export class Page3113Module {}
