import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2238Component } from './page2238.component';

@NgModule({
  declarations: [Page2238Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2238Component }])],
  exports: [Page2238Component]
})
export class Page2238Module {}
