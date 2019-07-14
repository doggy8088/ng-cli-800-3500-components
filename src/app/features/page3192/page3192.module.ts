import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3192Component } from './page3192.component';

@NgModule({
  declarations: [Page3192Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3192Component }])],
  exports: [Page3192Component]
})
export class Page3192Module {}
