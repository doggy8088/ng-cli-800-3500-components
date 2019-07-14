import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2467Component } from './page2467.component';

@NgModule({
  declarations: [Page2467Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2467Component }])],
  exports: [Page2467Component]
})
export class Page2467Module {}
