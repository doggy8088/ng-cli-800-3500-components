import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2368Component } from './page2368.component';

@NgModule({
  declarations: [Page2368Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2368Component }])],
  exports: [Page2368Component]
})
export class Page2368Module {}
