import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2334Component } from './page2334.component';

@NgModule({
  declarations: [Page2334Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2334Component }])],
  exports: [Page2334Component]
})
export class Page2334Module {}
