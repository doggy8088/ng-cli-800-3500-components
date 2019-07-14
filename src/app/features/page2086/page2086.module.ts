import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2086Component } from './page2086.component';

@NgModule({
  declarations: [Page2086Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2086Component }])],
  exports: [Page2086Component]
})
export class Page2086Module {}
