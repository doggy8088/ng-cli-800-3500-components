import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3500Component } from './page3500.component';

@NgModule({
  declarations: [Page3500Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3500Component }])],
  exports: [Page3500Component]
})
export class Page3500Module {}
