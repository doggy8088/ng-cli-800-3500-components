import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2815Component } from './page2815.component';

@NgModule({
  declarations: [Page2815Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2815Component }])],
  exports: [Page2815Component]
})
export class Page2815Module {}
