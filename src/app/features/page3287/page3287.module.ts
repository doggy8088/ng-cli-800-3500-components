import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3287Component } from './page3287.component';

@NgModule({
  declarations: [Page3287Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3287Component }])],
  exports: [Page3287Component]
})
export class Page3287Module {}
