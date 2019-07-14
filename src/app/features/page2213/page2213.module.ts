import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2213Component } from './page2213.component';

@NgModule({
  declarations: [Page2213Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2213Component }])],
  exports: [Page2213Component]
})
export class Page2213Module {}
