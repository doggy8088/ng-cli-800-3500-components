import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2861Component } from './page2861.component';

@NgModule({
  declarations: [Page2861Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2861Component }])],
  exports: [Page2861Component]
})
export class Page2861Module {}
