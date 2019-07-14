import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3122Component } from './page3122.component';

@NgModule({
  declarations: [Page3122Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3122Component }])],
  exports: [Page3122Component]
})
export class Page3122Module {}
