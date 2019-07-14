import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2940Component } from './page2940.component';

@NgModule({
  declarations: [Page2940Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2940Component }])],
  exports: [Page2940Component]
})
export class Page2940Module {}
