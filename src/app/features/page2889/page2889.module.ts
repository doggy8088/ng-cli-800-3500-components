import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2889Component } from './page2889.component';

@NgModule({
  declarations: [Page2889Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2889Component }])],
  exports: [Page2889Component]
})
export class Page2889Module {}
