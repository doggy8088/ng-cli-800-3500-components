import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3151Component } from './page3151.component';

@NgModule({
  declarations: [Page3151Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3151Component }])],
  exports: [Page3151Component]
})
export class Page3151Module {}
