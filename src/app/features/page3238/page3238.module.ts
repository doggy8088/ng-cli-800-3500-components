import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3238Component } from './page3238.component';

@NgModule({
  declarations: [Page3238Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3238Component }])],
  exports: [Page3238Component]
})
export class Page3238Module {}
