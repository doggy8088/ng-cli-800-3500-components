import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2172Component } from './page2172.component';

@NgModule({
  declarations: [Page2172Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2172Component }])],
  exports: [Page2172Component]
})
export class Page2172Module {}
