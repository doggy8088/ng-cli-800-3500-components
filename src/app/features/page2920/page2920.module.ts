import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2920Component } from './page2920.component';

@NgModule({
  declarations: [Page2920Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2920Component }])],
  exports: [Page2920Component]
})
export class Page2920Module {}
