import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2572Component } from './page2572.component';

@NgModule({
  declarations: [Page2572Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2572Component }])],
  exports: [Page2572Component]
})
export class Page2572Module {}
