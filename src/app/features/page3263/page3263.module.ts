import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3263Component } from './page3263.component';

@NgModule({
  declarations: [Page3263Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3263Component }])],
  exports: [Page3263Component]
})
export class Page3263Module {}
