import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2136Component } from './page2136.component';

@NgModule({
  declarations: [Page2136Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2136Component }])],
  exports: [Page2136Component]
})
export class Page2136Module {}
