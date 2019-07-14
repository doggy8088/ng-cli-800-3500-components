import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3195Component } from './page3195.component';

@NgModule({
  declarations: [Page3195Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3195Component }])],
  exports: [Page3195Component]
})
export class Page3195Module {}
