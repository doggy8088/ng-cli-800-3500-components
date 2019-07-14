import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2121Component } from './page2121.component';

@NgModule({
  declarations: [Page2121Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2121Component }])],
  exports: [Page2121Component]
})
export class Page2121Module {}
