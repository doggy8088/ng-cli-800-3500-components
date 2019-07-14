import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3121Component } from './page3121.component';

@NgModule({
  declarations: [Page3121Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3121Component }])],
  exports: [Page3121Component]
})
export class Page3121Module {}
