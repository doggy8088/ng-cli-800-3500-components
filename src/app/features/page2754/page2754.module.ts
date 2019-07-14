import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2754Component } from './page2754.component';

@NgModule({
  declarations: [Page2754Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2754Component }])],
  exports: [Page2754Component]
})
export class Page2754Module {}
