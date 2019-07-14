import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3373Component } from './page3373.component';

@NgModule({
  declarations: [Page3373Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3373Component }])],
  exports: [Page3373Component]
})
export class Page3373Module {}
