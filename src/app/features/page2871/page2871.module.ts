import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2871Component } from './page2871.component';

@NgModule({
  declarations: [Page2871Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2871Component }])],
  exports: [Page2871Component]
})
export class Page2871Module {}
