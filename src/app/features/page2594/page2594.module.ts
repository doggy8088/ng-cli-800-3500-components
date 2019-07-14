import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2594Component } from './page2594.component';

@NgModule({
  declarations: [Page2594Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2594Component }])],
  exports: [Page2594Component]
})
export class Page2594Module {}
