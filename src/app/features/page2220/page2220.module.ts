import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2220Component } from './page2220.component';

@NgModule({
  declarations: [Page2220Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2220Component }])],
  exports: [Page2220Component]
})
export class Page2220Module {}
