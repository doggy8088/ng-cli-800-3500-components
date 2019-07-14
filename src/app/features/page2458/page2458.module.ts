import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2458Component } from './page2458.component';

@NgModule({
  declarations: [Page2458Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2458Component }])],
  exports: [Page2458Component]
})
export class Page2458Module {}
