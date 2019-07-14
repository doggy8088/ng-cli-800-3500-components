import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3422Component } from './page3422.component';

@NgModule({
  declarations: [Page3422Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3422Component }])],
  exports: [Page3422Component]
})
export class Page3422Module {}
