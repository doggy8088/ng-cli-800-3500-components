import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3036Component } from './page3036.component';

@NgModule({
  declarations: [Page3036Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3036Component }])],
  exports: [Page3036Component]
})
export class Page3036Module {}
