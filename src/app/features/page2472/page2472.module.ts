import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2472Component } from './page2472.component';

@NgModule({
  declarations: [Page2472Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2472Component }])],
  exports: [Page2472Component]
})
export class Page2472Module {}
