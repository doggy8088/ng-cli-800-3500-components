import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3340Component } from './page3340.component';

@NgModule({
  declarations: [Page3340Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3340Component }])],
  exports: [Page3340Component]
})
export class Page3340Module {}
