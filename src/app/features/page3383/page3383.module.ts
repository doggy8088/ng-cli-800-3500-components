import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3383Component } from './page3383.component';

@NgModule({
  declarations: [Page3383Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3383Component }])],
  exports: [Page3383Component]
})
export class Page3383Module {}
