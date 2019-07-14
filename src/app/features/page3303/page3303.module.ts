import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3303Component } from './page3303.component';

@NgModule({
  declarations: [Page3303Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3303Component }])],
  exports: [Page3303Component]
})
export class Page3303Module {}
