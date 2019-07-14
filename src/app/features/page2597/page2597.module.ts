import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2597Component } from './page2597.component';

@NgModule({
  declarations: [Page2597Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2597Component }])],
  exports: [Page2597Component]
})
export class Page2597Module {}
