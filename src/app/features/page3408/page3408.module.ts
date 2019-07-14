import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3408Component } from './page3408.component';

@NgModule({
  declarations: [Page3408Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3408Component }])],
  exports: [Page3408Component]
})
export class Page3408Module {}
