import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3288Component } from './page3288.component';

@NgModule({
  declarations: [Page3288Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3288Component }])],
  exports: [Page3288Component]
})
export class Page3288Module {}
