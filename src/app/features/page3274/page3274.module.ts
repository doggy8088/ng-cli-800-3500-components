import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3274Component } from './page3274.component';

@NgModule({
  declarations: [Page3274Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3274Component }])],
  exports: [Page3274Component]
})
export class Page3274Module {}
