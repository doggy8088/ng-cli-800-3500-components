import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3210Component } from './page3210.component';

@NgModule({
  declarations: [Page3210Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3210Component }])],
  exports: [Page3210Component]
})
export class Page3210Module {}
