import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3191Component } from './page3191.component';

@NgModule({
  declarations: [Page3191Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3191Component }])],
  exports: [Page3191Component]
})
export class Page3191Module {}
