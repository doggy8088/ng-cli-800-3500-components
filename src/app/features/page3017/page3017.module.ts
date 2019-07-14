import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3017Component } from './page3017.component';

@NgModule({
  declarations: [Page3017Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3017Component }])],
  exports: [Page3017Component]
})
export class Page3017Module {}
