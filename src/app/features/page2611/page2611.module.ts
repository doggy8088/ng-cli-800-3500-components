import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2611Component } from './page2611.component';

@NgModule({
  declarations: [Page2611Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2611Component }])],
  exports: [Page2611Component]
})
export class Page2611Module {}
