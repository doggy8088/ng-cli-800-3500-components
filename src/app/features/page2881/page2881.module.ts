import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2881Component } from './page2881.component';

@NgModule({
  declarations: [Page2881Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2881Component }])],
  exports: [Page2881Component]
})
export class Page2881Module {}
