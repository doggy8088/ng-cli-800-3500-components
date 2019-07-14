import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2579Component } from './page2579.component';

@NgModule({
  declarations: [Page2579Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2579Component }])],
  exports: [Page2579Component]
})
export class Page2579Module {}
