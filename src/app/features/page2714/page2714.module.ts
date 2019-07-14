import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2714Component } from './page2714.component';

@NgModule({
  declarations: [Page2714Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2714Component }])],
  exports: [Page2714Component]
})
export class Page2714Module {}
