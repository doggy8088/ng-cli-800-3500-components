import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3047Component } from './page3047.component';

@NgModule({
  declarations: [Page3047Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3047Component }])],
  exports: [Page3047Component]
})
export class Page3047Module {}
