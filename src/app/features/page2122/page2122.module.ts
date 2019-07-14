import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2122Component } from './page2122.component';

@NgModule({
  declarations: [Page2122Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2122Component }])],
  exports: [Page2122Component]
})
export class Page2122Module {}
