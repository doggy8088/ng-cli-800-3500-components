import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3397Component } from './page3397.component';

@NgModule({
  declarations: [Page3397Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3397Component }])],
  exports: [Page3397Component]
})
export class Page3397Module {}
