import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3492Component } from './page3492.component';

@NgModule({
  declarations: [Page3492Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3492Component }])],
  exports: [Page3492Component]
})
export class Page3492Module {}
