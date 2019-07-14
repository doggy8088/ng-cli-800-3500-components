import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2418Component } from './page2418.component';

@NgModule({
  declarations: [Page2418Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2418Component }])],
  exports: [Page2418Component]
})
export class Page2418Module {}
