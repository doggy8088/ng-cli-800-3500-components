import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2384Component } from './page2384.component';

@NgModule({
  declarations: [Page2384Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2384Component }])],
  exports: [Page2384Component]
})
export class Page2384Module {}
