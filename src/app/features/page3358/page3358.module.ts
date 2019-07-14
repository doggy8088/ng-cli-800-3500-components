import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3358Component } from './page3358.component';

@NgModule({
  declarations: [Page3358Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3358Component }])],
  exports: [Page3358Component]
})
export class Page3358Module {}
