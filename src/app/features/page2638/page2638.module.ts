import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2638Component } from './page2638.component';

@NgModule({
  declarations: [Page2638Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2638Component }])],
  exports: [Page2638Component]
})
export class Page2638Module {}
