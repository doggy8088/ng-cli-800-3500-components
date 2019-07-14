import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3292Component } from './page3292.component';

@NgModule({
  declarations: [Page3292Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3292Component }])],
  exports: [Page3292Component]
})
export class Page3292Module {}
