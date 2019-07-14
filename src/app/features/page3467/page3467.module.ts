import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3467Component } from './page3467.component';

@NgModule({
  declarations: [Page3467Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3467Component }])],
  exports: [Page3467Component]
})
export class Page3467Module {}
