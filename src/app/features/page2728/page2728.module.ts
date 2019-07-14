import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2728Component } from './page2728.component';

@NgModule({
  declarations: [Page2728Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2728Component }])],
  exports: [Page2728Component]
})
export class Page2728Module {}
