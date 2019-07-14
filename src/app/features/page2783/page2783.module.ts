import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2783Component } from './page2783.component';

@NgModule({
  declarations: [Page2783Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2783Component }])],
  exports: [Page2783Component]
})
export class Page2783Module {}
