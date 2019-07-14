import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3473Component } from './page3473.component';

@NgModule({
  declarations: [Page3473Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3473Component }])],
  exports: [Page3473Component]
})
export class Page3473Module {}
