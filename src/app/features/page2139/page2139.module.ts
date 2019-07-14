import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2139Component } from './page2139.component';

@NgModule({
  declarations: [Page2139Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2139Component }])],
  exports: [Page2139Component]
})
export class Page2139Module {}
