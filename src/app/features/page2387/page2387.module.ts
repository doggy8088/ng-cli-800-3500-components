import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2387Component } from './page2387.component';

@NgModule({
  declarations: [Page2387Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2387Component }])],
  exports: [Page2387Component]
})
export class Page2387Module {}
