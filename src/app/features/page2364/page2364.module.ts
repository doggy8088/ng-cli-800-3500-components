import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2364Component } from './page2364.component';

@NgModule({
  declarations: [Page2364Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2364Component }])],
  exports: [Page2364Component]
})
export class Page2364Module {}
