import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2448Component } from './page2448.component';

@NgModule({
  declarations: [Page2448Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2448Component }])],
  exports: [Page2448Component]
})
export class Page2448Module {}
