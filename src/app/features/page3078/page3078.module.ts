import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3078Component } from './page3078.component';

@NgModule({
  declarations: [Page3078Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3078Component }])],
  exports: [Page3078Component]
})
export class Page3078Module {}
