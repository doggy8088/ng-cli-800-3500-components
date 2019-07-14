import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2624Component } from './page2624.component';

@NgModule({
  declarations: [Page2624Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2624Component }])],
  exports: [Page2624Component]
})
export class Page2624Module {}
