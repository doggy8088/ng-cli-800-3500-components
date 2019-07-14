import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2667Component } from './page2667.component';

@NgModule({
  declarations: [Page2667Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2667Component }])],
  exports: [Page2667Component]
})
export class Page2667Module {}
