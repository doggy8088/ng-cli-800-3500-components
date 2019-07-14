import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2362Component } from './page2362.component';

@NgModule({
  declarations: [Page2362Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2362Component }])],
  exports: [Page2362Component]
})
export class Page2362Module {}
