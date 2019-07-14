import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3320Component } from './page3320.component';

@NgModule({
  declarations: [Page3320Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3320Component }])],
  exports: [Page3320Component]
})
export class Page3320Module {}
