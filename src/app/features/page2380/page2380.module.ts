import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2380Component } from './page2380.component';

@NgModule({
  declarations: [Page2380Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2380Component }])],
  exports: [Page2380Component]
})
export class Page2380Module {}
