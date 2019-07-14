import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2191Component } from './page2191.component';

@NgModule({
  declarations: [Page2191Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2191Component }])],
  exports: [Page2191Component]
})
export class Page2191Module {}
