import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2711Component } from './page2711.component';

@NgModule({
  declarations: [Page2711Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2711Component }])],
  exports: [Page2711Component]
})
export class Page2711Module {}
