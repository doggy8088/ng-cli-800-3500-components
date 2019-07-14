import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2520Component } from './page2520.component';

@NgModule({
  declarations: [Page2520Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2520Component }])],
  exports: [Page2520Component]
})
export class Page2520Module {}
