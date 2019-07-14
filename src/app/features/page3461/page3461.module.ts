import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3461Component } from './page3461.component';

@NgModule({
  declarations: [Page3461Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3461Component }])],
  exports: [Page3461Component]
})
export class Page3461Module {}
