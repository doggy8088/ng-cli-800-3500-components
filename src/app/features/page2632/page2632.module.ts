import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2632Component } from './page2632.component';

@NgModule({
  declarations: [Page2632Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2632Component }])],
  exports: [Page2632Component]
})
export class Page2632Module {}
