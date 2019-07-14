import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2573Component } from './page2573.component';

@NgModule({
  declarations: [Page2573Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2573Component }])],
  exports: [Page2573Component]
})
export class Page2573Module {}
