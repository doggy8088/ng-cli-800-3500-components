import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2378Component } from './page2378.component';

@NgModule({
  declarations: [Page2378Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2378Component }])],
  exports: [Page2378Component]
})
export class Page2378Module {}
