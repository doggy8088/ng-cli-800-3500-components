import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2347Component } from './page2347.component';

@NgModule({
  declarations: [Page2347Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2347Component }])],
  exports: [Page2347Component]
})
export class Page2347Module {}
