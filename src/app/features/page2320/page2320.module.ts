import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2320Component } from './page2320.component';

@NgModule({
  declarations: [Page2320Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2320Component }])],
  exports: [Page2320Component]
})
export class Page2320Module {}
