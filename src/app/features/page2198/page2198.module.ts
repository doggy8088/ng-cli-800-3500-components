import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2198Component } from './page2198.component';

@NgModule({
  declarations: [Page2198Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2198Component }])],
  exports: [Page2198Component]
})
export class Page2198Module {}
