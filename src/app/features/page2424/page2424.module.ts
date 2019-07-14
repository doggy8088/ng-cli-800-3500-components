import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2424Component } from './page2424.component';

@NgModule({
  declarations: [Page2424Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2424Component }])],
  exports: [Page2424Component]
})
export class Page2424Module {}
