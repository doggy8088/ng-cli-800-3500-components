import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2635Component } from './page2635.component';

@NgModule({
  declarations: [Page2635Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2635Component }])],
  exports: [Page2635Component]
})
export class Page2635Module {}
