import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2264Component } from './page2264.component';

@NgModule({
  declarations: [Page2264Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2264Component }])],
  exports: [Page2264Component]
})
export class Page2264Module {}
