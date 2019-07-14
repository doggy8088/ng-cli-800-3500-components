import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3089Component } from './page3089.component';

@NgModule({
  declarations: [Page3089Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3089Component }])],
  exports: [Page3089Component]
})
export class Page3089Module {}
