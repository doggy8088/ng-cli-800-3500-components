import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2521Component } from './page2521.component';

@NgModule({
  declarations: [Page2521Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2521Component }])],
  exports: [Page2521Component]
})
export class Page2521Module {}
