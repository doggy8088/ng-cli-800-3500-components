import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2776Component } from './page2776.component';

@NgModule({
  declarations: [Page2776Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2776Component }])],
  exports: [Page2776Component]
})
export class Page2776Module {}
