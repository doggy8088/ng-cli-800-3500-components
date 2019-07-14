import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2184Component } from './page2184.component';

@NgModule({
  declarations: [Page2184Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2184Component }])],
  exports: [Page2184Component]
})
export class Page2184Module {}
