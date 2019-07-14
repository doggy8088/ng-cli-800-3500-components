import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2864Component } from './page2864.component';

@NgModule({
  declarations: [Page2864Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2864Component }])],
  exports: [Page2864Component]
})
export class Page2864Module {}
