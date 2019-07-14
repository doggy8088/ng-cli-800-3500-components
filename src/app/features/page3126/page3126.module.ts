import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3126Component } from './page3126.component';

@NgModule({
  declarations: [Page3126Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3126Component }])],
  exports: [Page3126Component]
})
export class Page3126Module {}
