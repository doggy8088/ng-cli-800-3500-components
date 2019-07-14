import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2763Component } from './page2763.component';

@NgModule({
  declarations: [Page2763Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2763Component }])],
  exports: [Page2763Component]
})
export class Page2763Module {}
