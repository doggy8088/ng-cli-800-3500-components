import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3420Component } from './page3420.component';

@NgModule({
  declarations: [Page3420Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3420Component }])],
  exports: [Page3420Component]
})
export class Page3420Module {}
