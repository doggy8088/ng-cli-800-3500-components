import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2874Component } from './page2874.component';

@NgModule({
  declarations: [Page2874Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2874Component }])],
  exports: [Page2874Component]
})
export class Page2874Module {}
