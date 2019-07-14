import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3399Component } from './page3399.component';

@NgModule({
  declarations: [Page3399Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3399Component }])],
  exports: [Page3399Component]
})
export class Page3399Module {}
