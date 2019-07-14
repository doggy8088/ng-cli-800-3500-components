import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2069Component } from './page2069.component';

@NgModule({
  declarations: [Page2069Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2069Component }])],
  exports: [Page2069Component]
})
export class Page2069Module {}
