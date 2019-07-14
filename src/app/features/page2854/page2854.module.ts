import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2854Component } from './page2854.component';

@NgModule({
  declarations: [Page2854Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2854Component }])],
  exports: [Page2854Component]
})
export class Page2854Module {}
