import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2780Component } from './page2780.component';

@NgModule({
  declarations: [Page2780Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2780Component }])],
  exports: [Page2780Component]
})
export class Page2780Module {}
