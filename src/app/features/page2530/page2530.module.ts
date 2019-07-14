import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2530Component } from './page2530.component';

@NgModule({
  declarations: [Page2530Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2530Component }])],
  exports: [Page2530Component]
})
export class Page2530Module {}
