import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2885Component } from './page2885.component';

@NgModule({
  declarations: [Page2885Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2885Component }])],
  exports: [Page2885Component]
})
export class Page2885Module {}
