import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2169Component } from './page2169.component';

@NgModule({
  declarations: [Page2169Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2169Component }])],
  exports: [Page2169Component]
})
export class Page2169Module {}
