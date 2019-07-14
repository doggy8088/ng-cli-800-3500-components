import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3086Component } from './page3086.component';

@NgModule({
  declarations: [Page3086Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3086Component }])],
  exports: [Page3086Component]
})
export class Page3086Module {}
