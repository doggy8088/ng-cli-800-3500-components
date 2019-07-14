import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3083Component } from './page3083.component';

@NgModule({
  declarations: [Page3083Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3083Component }])],
  exports: [Page3083Component]
})
export class Page3083Module {}
