import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2766Component } from './page2766.component';

@NgModule({
  declarations: [Page2766Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2766Component }])],
  exports: [Page2766Component]
})
export class Page2766Module {}
