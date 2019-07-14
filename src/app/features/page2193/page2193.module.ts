import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2193Component } from './page2193.component';

@NgModule({
  declarations: [Page2193Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2193Component }])],
  exports: [Page2193Component]
})
export class Page2193Module {}
