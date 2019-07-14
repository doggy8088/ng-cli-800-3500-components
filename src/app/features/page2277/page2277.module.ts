import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2277Component } from './page2277.component';

@NgModule({
  declarations: [Page2277Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2277Component }])],
  exports: [Page2277Component]
})
export class Page2277Module {}
