import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2206Component } from './page2206.component';

@NgModule({
  declarations: [Page2206Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2206Component }])],
  exports: [Page2206Component]
})
export class Page2206Module {}
