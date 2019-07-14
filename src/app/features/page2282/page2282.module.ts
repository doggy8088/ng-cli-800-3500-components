import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2282Component } from './page2282.component';

@NgModule({
  declarations: [Page2282Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2282Component }])],
  exports: [Page2282Component]
})
export class Page2282Module {}
