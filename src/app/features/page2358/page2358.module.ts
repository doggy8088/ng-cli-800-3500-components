import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2358Component } from './page2358.component';

@NgModule({
  declarations: [Page2358Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2358Component }])],
  exports: [Page2358Component]
})
export class Page2358Module {}
