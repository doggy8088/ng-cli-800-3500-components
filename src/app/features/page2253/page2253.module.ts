import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2253Component } from './page2253.component';

@NgModule({
  declarations: [Page2253Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2253Component }])],
  exports: [Page2253Component]
})
export class Page2253Module {}
