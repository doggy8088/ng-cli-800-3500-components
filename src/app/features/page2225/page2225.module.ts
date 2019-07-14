import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2225Component } from './page2225.component';

@NgModule({
  declarations: [Page2225Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2225Component }])],
  exports: [Page2225Component]
})
export class Page2225Module {}
