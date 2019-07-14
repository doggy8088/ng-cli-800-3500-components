import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2848Component } from './page2848.component';

@NgModule({
  declarations: [Page2848Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2848Component }])],
  exports: [Page2848Component]
})
export class Page2848Module {}
